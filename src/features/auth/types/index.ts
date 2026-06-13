export interface RegisterTenantPayload {
  tenantName: string;
  tenantSlug: string;
  adminName: string;
  adminEmail: string;
  adminPhone: string;
  address: string;
  pincode: string;
  state: string;
  country: string;
  password: string;
}

export interface LoginPayload {
  orgCode: string;
  loginId: string;
  password: string;
}

export interface User {
  id: string;
  adminName: string;
  adminEmail: string;
  adminPhone: string;
  role: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}
