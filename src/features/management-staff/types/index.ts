export interface CreateManagementStaffPayload {
  name: string;
  email: string;
  phone: string;
  password: string;
  department: string;
}

export interface UpdateManagementStaffPayload {
  name?: string;
  phone?: string;
  department?: string;
}

export interface ManagementStaff {
  id: string;
  department: string;

  user: {
    name: string;
    email: string;
    phone: string;
  };
}