"use client";

import { useEffect, useRef } from "react";
import { useFormContext } from "react-hook-form";
import { Country, State } from "country-state-city";
import { FormInput } from "@/components/ui/FormInput";
import { SelectField } from "@/components/ui/SelectField";
import { showToast } from "@/components/ui/Toast";
import type { RegisterSchemaType } from "@/features/auth/schemas/registerSchema";

export function LocationFields() {
  const { register, watch, setValue, formState: { errors } } = useFormContext<RegisterSchemaType>();
  const pincode = watch("pincode");
  const selectedCountry = watch("country");
  const abortControllerRef = useRef<AbortController | null>(null);

  const countries = Country.getAllCountries();
  const states = selectedCountry ? State.getStatesOfCountry(selectedCountry) : [];

  useEffect(() => {
    const fetchLocation = async () => {
      // Cancel previous request
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }

      if (pincode?.length === 6) {
        const loadingToast = showToast.loading("Fetching location details...");
        
        // Create new abort controller
        abortControllerRef.current = new AbortController();

        try {
          const response = await fetch(
            `https://api.postalpincode.in/pincode/${pincode}`,
            { signal: abortControllerRef.current.signal }
          );

          const data = await response.json();

          if (data[0]?.Status === "Success" && data[0]?.PostOffice?.length > 0) {
            const postOffice = data[0].PostOffice[0];

            // Safer production way with requestAnimationFrame to avoid race conditions
            setValue("country", "IN", { shouldValidate: true });
            
            requestAnimationFrame(() => {
              setValue("state", postOffice.State, { shouldValidate: true });
            });

            showToast.success("Location auto-detected successfully!");
          } else {
            showToast.error("Could not find location for this pincode");
          }
        } catch (error) {
          // Don't show error if it's an abort error
          if (error instanceof Error && error.name === "AbortError") {
            return;
          }
          
          if (process.env.NODE_ENV === "development") {
            console.error("Location fetch error:", error);
          }
          
          showToast.error("Failed to fetch location details");
        } finally {
          showToast.dismiss(loadingToast);
        }
      }
    };

    fetchLocation();

    // Cleanup function
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [pincode, setValue]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <FormInput
        label="Pin Code"
        type="text"
        placeholder="201301"
        maxLength={6}
        inputMode="numeric"
        autoComplete="postal-code"
        error={errors.pincode?.message}
        {...register("pincode")}
      />

      <SelectField
        label="State"
        options={[
          { value: "", label: "Select State" },
          ...states.map(state => ({ value: state.name, label: state.name }))
        ]}
        error={errors.state?.message}
        {...register("state")}
      />

      <SelectField
        label="Country"
        options={[
          { value: "", label: "Select Country" },
          ...countries.map(country => ({ value: country.isoCode, label: country.name }))
        ]}
        error={errors.country?.message}
        {...register("country")}
      />
    </div>
  );
}