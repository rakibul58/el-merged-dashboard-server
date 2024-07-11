export interface IOrganization {
  name: string;
  adminRoutes: string[];
  studentRoutes: string[];
  parentRoutes: string[];
  schoolRoutes: string[];
  isDeleted?: boolean;
}
