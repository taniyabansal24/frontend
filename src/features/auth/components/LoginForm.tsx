"use client";

import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  loginSchema,
  LoginSchemaType,
} from "@/features/auth/schemas/loginSchema";

import { useLoginMutation } from "@/features/auth/api/mutations";

import { FormInput } from "@/components/ui/FormInput";
import { PasswordInput } from "@/components/ui/PasswordInput";

export function LoginForm() {
  const router = useRouter();

  const methods = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      orgCode: "",
      loginId: "",
      password: "",
      rememberMe: false,
    },
  });

  // Use the encapsulated mutation (handles cookies, Zustand, invalidation, and toasts)
  const { mutate, isPending } = useLoginMutation();

  const onSubmit = (data: LoginSchemaType) => {
    if (!isPending) {
      mutate(data);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="space-y-5"
      >
        <FormInput
          label="Organization Code"
          type="text"
          placeholder="ROUGE123"
          error={methods.formState.errors.orgCode?.message}
          {...methods.register("orgCode")}
        />

        <FormInput
          label="Login ID"
          type="text"
          placeholder="admin@example.com"
          error={methods.formState.errors.loginId?.message}
          {...methods.register("loginId")}
        />

        <PasswordInput
          label="Password"
          placeholder="••••••••••••"
          error={methods.formState.errors.password?.message}
          {...methods.register("password")}
        />

        <div className="flex items-center justify-between mt-2">
          {/* Remember me */}
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              {...methods.register("rememberMe")}
              className="peer sr-only"
            />
            <div
              className="
                group w-4 h-4 rounded border border-gray-300 bg-white flex items-center justify-center transition-all duration-200
                peer-checked:bg-[#6FA073] peer-checked:border-[#6FA073]
              "
            >
              <svg
                className="w-2.5 h-2.5 text-white opacity-0 transition-opacity group-peer-checked:opacity-100"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-sm font-medium text-[#717182] peer-checked:text-black transition-colors">
              Remember me
            </span>
          </label>

          {/* Forgot Password */}
          <button
            type="button"
            onClick={() => router.push("/forgot-password")}
            className="text-sm font-medium text-[#717182] hover:text-[#6FA073] transition-all"
          >
            Forgot Password?
          </button>
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="
            w-full h-14 bg-[#6FA073] rounded-[10px] text-white font-medium text-[18px]
            hover:bg-[#4A664C] disabled:opacity-70 disabled:cursor-not-allowed transition-all mt-6
          "
        >
          {isPending ? "Signing In..." : "Login"}
        </button>

        <div className="pt-2 text-center">
          <button
            type="button"
            onClick={() => router.push("/")}
            className="text-[#717182] hover:text-[#030213] hover:underline transition-all font-medium"
          >
            ← Don&apos;t have an account? Contact us to get started!
          </button>
        </div>
      </form>
    </FormProvider>
  );
}
