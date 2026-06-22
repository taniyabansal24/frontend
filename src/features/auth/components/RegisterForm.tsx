"use client";

import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegisterMutation } from "@/features/auth";
import {
  registerSchema,
  RegisterSchemaType,
} from "@/features/auth/schemas/registerSchema";
import { FormInput } from "@/components/ui/FormInput";
import { PasswordInput } from "@/components/ui/PasswordInput";
import { LocationFields } from "@/components/shared/LocationFields";
import { sanitizeSlug } from "@/lib/utils";
import type { RegisterTenantPayload } from "@/features/auth/types";

export function RegisterForm() {
  const router = useRouter();

  const methods = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      tenantName: "",
      tenantSlug: "",
      adminName: "",
      adminEmail: "",
      adminPhone: "",
      address: "",
      pincode: "",
      state: "",
      country: "",
      password: "",
      confirmPassword: "",
    },
  });

  const { mutate, isPending } = useRegisterMutation();

  const onSubmit = (data: RegisterSchemaType) => {
    const { confirmPassword, ...payload } = data;
    void confirmPassword;

    mutate(payload as RegisterTenantPayload);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-5">
        <FormInput
          label="Academy Name"
          type="text"
          placeholder="Rouge Coaching Academy"
          autoComplete="organization"
          error={methods.formState.errors.tenantName?.message}
          {...methods.register("tenantName")}
        />

        <FormInput
          label="Academy Slug"
          type="text"
          placeholder="rouge-coaching-academy"
          autoComplete="organization"
          error={methods.formState.errors.tenantSlug?.message}
          {...methods.register("tenantSlug", {
            onChange: (e) => {
              const slug = sanitizeSlug(e.target.value);
              e.target.value = slug;
              return slug;
            },
          })}
        />

        <FormInput
          label="Admin Name"
          type="text"
          placeholder="Sahil Sharma"
          autoComplete="name"
          error={methods.formState.errors.adminName?.message}
          {...methods.register("adminName")}
        />

        <FormInput
          label="Admin Email"
          type="email"
          placeholder="admin@example.com"
          autoComplete="email"
          inputMode="email"
          error={methods.formState.errors.adminEmail?.message}
          {...methods.register("adminEmail")}
        />

        <FormInput
          label="Admin Phone"
          type="tel"
          placeholder="+919876543210"
          autoComplete="tel"
          inputMode="tel"
          error={methods.formState.errors.adminPhone?.message}
          {...methods.register("adminPhone")}
        />

        <FormInput
          label="Address"
          type="text"
          placeholder="Sector 62, Noida, Uttar Pradesh"
          autoComplete="street-address"
          error={methods.formState.errors.address?.message}
          {...methods.register("address")}
        />

        <LocationFields />

        <PasswordInput
          label="Password"
          placeholder="••••••••••••••••"
          autoComplete="new-password"
          error={methods.formState.errors.password?.message}
          {...methods.register("password")}
        />

        <PasswordInput
          label="Confirm Password"
          placeholder="••••••••••••••••"
          autoComplete="new-password"
          error={methods.formState.errors.confirmPassword?.message}
          {...methods.register("confirmPassword")}
        />

        <button
          type="submit"
          disabled={isPending}
          aria-disabled={isPending}
          className="w-full h-14 bg-[#6FA073] rounded-[10px] card-title text-white hover:bg-[#4A664C] disabled:opacity-70 disabled:cursor-not-allowed transition-all mt-6"
        >
          {isPending ? "Creating Account..." : "Create Account"}
        </button>

        <div className="pt-6 mx-auto text-center">
          <button
            type="button"
            onClick={() => router.push("/login")}
            className="card-title text-[#717182] hover:text-[#030213] hover:underline transition-all duration-200"
          >
            ← Already have an account? Back to Login
          </button>
        </div>
      </form>
    </FormProvider>
  );
}
