"use client";

import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  resetPasswordSchema,
  ResetPasswordSchemaType,
} from "@/features/auth/schemas/resetPasswordSchema";

import { useResetPasswordMutation } from "@/features/auth/api/mutations";
import { PasswordInput } from "@/components/ui/PasswordInput";
import { showToast } from "@/components/ui/Toast";

export function ResetPasswordForm() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const methods = useForm<ResetPasswordSchemaType>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const { mutate, isPending } = useResetPasswordMutation();

  const onSubmit = (data: ResetPasswordSchemaType) => {
    if (!token) {
      showToast.error("Invalid reset token");
      return;
    }

    mutate({
      token,
      password: data.password,
    });
  };

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
      <PasswordInput
        label="New Password"
        placeholder="Enter your new password"
        error={methods.formState.errors.password?.message}
        {...methods.register("password")}
      />

      <PasswordInput
        label="Confirm New Password"
        placeholder="Confirm your new password"
        error={methods.formState.errors.confirmPassword?.message}
        {...methods.register("confirmPassword")}
      />

      {/* Tip */}
      <div className="bg-[#F7F7F8] border border-[#6FA073]/50 rounded-xl p-5">
        <p className="text-sm text-[#0A0A0A]">
          <span className="font-bold">Tip:</span> Use a combination of letters,
          numbers, and symbols to create a strong password. Avoid using personal
          information.
        </p>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="
          w-full h-14 bg-[#6FA073] rounded-[10px] text-white font-medium text-[18px]
          hover:bg-[#4A664C] disabled:opacity-70 disabled:cursor-not-allowed transition-all mt-6
        "
      >
        {isPending ? "Resetting Password..." : "Reset Password"}
      </button>
    </form>
  );
}
