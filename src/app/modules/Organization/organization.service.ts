import { IOrganization } from './organization.interface';
import { Organization } from './organization.model';

// creating a Organization in the db
const createOrganizationIntoDB = async (payload: IOrganization) => {
  const result = await Organization.create(payload);
  return result;
};

// get single Organization
const getSingleOrganizationFromDB = async (id: string) => {
  const result = await Organization.findById(id);
  return result;
};

export const OrganizationServices = {
  createOrganizationIntoDB,
  getSingleOrganizationFromDB,
};
