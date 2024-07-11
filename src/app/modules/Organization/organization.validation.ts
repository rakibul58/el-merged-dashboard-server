import { z } from 'zod';

// create Organization validation schema
const createOrganizationValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required!' }).trim(),
    adminRoutes: z.array(z.string(), {
      required_error: 'Admin Routes is required',
    }),
    studentRoutes: z.array(z.string(), {
      required_error: 'Student Routes is required',
    }),
    schoolRoutes: z.array(z.string(), {
      required_error: 'School Routes is required',
    }),
    parentRoutes: z.array(z.string(), {
      required_error: 'Parent Routes is required',
    }),
    isDeleted: z.boolean().optional().default(false),
  }),
});

// update Organization validation schema
const updateOrganizationValidationSchema = z.object({
  body: z.object({
    name: z.string().trim().optional(),
    adminRoutes: z.array(z.string()).optional(),
    studentRoutes: z.array(z.string()).optional(),
    schoolRoutes: z.array(z.string()).optional(),
    parentRoutes: z.array(z.string()).optional(),
  }),
});

export const OrganizationValidations = {
  createOrganizationValidationSchema,
  updateOrganizationValidationSchema,
};
