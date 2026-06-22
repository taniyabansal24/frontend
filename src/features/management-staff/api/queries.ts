// features/management-staff/api/queries.ts

import { useQuery } from "@tanstack/react-query";

import { getManagementStaff } from "./service";
import { ManagementStaff } from "../types";

import { MANAGEMENT_STAFF_KEYS } from "./query-keys";

export const useManagementStaffQuery = () =>
  useQuery({
    queryKey: MANAGEMENT_STAFF_KEYS.list(),

    queryFn: getManagementStaff,

    select: (staff: ManagementStaff[]) =>
      staff.map((member) => ({
        id: member.id,

        staffId: `STF${member.id.slice(0, 6).toUpperCase()}`,

        name: member.user?.name,
        email: member.user?.email,
        phone: member.user?.phone,
        department: member.department,
      })),
  });
