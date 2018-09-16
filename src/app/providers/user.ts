export interface User {
  uid: string;
  email: string;
  displayName?: string;
  roles: Roles;
  batches: string[];
}
export interface Roles {
  worker?: boolean;
  admin?: boolean;
}
