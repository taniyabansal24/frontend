// components/dashboard/layout/UserProfileDropdown.tsx

"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BadgeCheckIcon, CreditCardIcon, BellIcon, LogOutIcon, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { logoutUser } from "@/features/auth/api/auth-api";
import { useAuthStore } from "@/store/auth-store";
import { showToast } from "@/components/ui/Toast";

interface UserProfileDropdownProps {
  user: {
    name: string;
    email: string;
    avatar?: string;
    role?: string;
  };
}

export default function UserProfileDropdown({ user }: UserProfileDropdownProps) {
  const router = useRouter();
  const { logout } = useAuthStore();

  const { mutate: handleLogout, isPending } = useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      logout();
      Cookies.remove("token", { path: "/" });
      showToast.success("Logged out successfully");
      router.push("/login");
    },
    onError: () => {
      logout();
      Cookies.remove("token", { path: "/" });
      showToast.error("Session ended");
      router.push("/login");
    },
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="group flex items-center gap-3 py-2 rounded-xl cursor-pointer outline-none hover:bg-[#F9FAFB] transition-all duration-200 data-[state=open]:bg-[#F9FAFB]">
          <Avatar className="w-9 h-9 border-2 border-[#6FA073]">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>{user.name?.slice(0, 2)}</AvatarFallback>
          </Avatar>

          <div className="hidden lg:block text-left">
            <h4 className="card-title">{user.name}</h4>
            <p className="caption text-[#667085]">{user.role || "Super Admin"}</p>
          </div>

          {/* Arrow container */}
          <div className="w-6 h-6 rounded-full flex items-center justify-center bg-[#F2F4F7] group-hover:bg-[#E4E7EC] transition-all">
            <ChevronDown
              size={14}
              className="text-[#667085] transition-transform duration-300 group-data-[state=open]:rotate-180"
            />
          </div>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-64 rounded-xl">
        <DropdownMenuLabel>
          <div className="flex gap-3 items-center">
            <Avatar className="w-10 h-10">
              <AvatarImage src={user.avatar} />
              <AvatarFallback>{user.name?.slice(0, 2)}</AvatarFallback>
            </Avatar>

            <div>
              <h4 className="card-title">{user.name}</h4>
              <p className="caption">{user.email}</p>
            </div>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem>
            <BadgeCheckIcon size={16} />
            Account
          </DropdownMenuItem>

          <DropdownMenuItem>
            <CreditCardIcon size={16} />
            Billing
          </DropdownMenuItem>

          <DropdownMenuItem>
            <BellIcon size={16} />
            Notifications
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={() => handleLogout()} className="text-red-500">
          <LogOutIcon size={16} />
          {isPending ? "Logging out..." : "Logout"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}