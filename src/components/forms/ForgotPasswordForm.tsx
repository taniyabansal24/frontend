"use client";

import { useRouter } from "next/navigation";

import { useMutation } from "@tanstack/react-query";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import axios from "axios";

import {
  forgotPasswordSchema,
  ForgotPasswordSchemaType,
} from "@/features/auth/schemas/forgotPasswordSchema";

import { forgotPassword } from "@/features/auth/api/auth-api";

import { FormInput } from "@/components/ui/FormInput";

import { showToast } from "@/components/ui/Toast";

interface ForgotPasswordFormProps {
  onSuccess: () => void;
}

export default function ForgotPasswordForm({
  onSuccess,
}: ForgotPasswordFormProps) {
  const router = useRouter();

  const methods = useForm<ForgotPasswordSchemaType>({
    resolver: zodResolver(forgotPasswordSchema),

    defaultValues: {
      orgCode: "",
      loginId: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: forgotPassword,

    onSuccess: () => {
      showToast.success("Reset instructions sent successfully");

      onSuccess();
    },

    onError: (error: Error) => {
      const errorMessage = axios.isAxiosError(error)
        ? error.response?.data?.message || "Failed to send reset email"
        : "Something went wrong";

      showToast.error(errorMessage);
    },
  });

  const onSubmit = (data: ForgotPasswordSchemaType) => {
    mutate(data);
  };

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
      <FormInput
        label="Organization Code"
        type="text"
        placeholder="Enter your organization code"
        error={methods.formState.errors.orgCode?.message}
        {...methods.register("orgCode")}
      />

      <div>
        <FormInput
          label="Login ID (Email or Phone)"
          type="text"
          placeholder="Enter your email or phone"
          error={methods.formState.errors.loginId?.message}
          {...methods.register("loginId")}
        />

        <p className="text-xs text-[#717182] mt-2">
          We&apos;ll send password reset instructions to your registered email.
        </p>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="
          w-full
          h-14
          bg-[#6FA073]
          rounded-[10px]
          text-white
          font-medium
          text-[18px]
          hover:bg-[#4A664C]
          disabled:opacity-70
          disabled:cursor-not-allowed
          transition-all
          mt-6
          "
      >
        {isPending ? "Sending Instructions..." : "Send Reset Instructions"}
      </button>

      <div className="pt-2 mx-auto text-center">
        <button
          onClick={() => router.push("/login")}
          className="text-[#717182] hover:text-[#030213] hover:underline transition-all duration-200 font-inter font-medium text-base"
        >
          ← Remember your password? Back to Login
        </button>
      </div>
    </form>
  );
}
