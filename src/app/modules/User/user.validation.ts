import { z } from 'zod';

// Validation for register
const userRegisterValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required!' }).trim(),
    email: z
      .string({ required_error: 'Email is required!' })
      .trim()
      .email({ message: 'Please enter a valid email' }),
    role: z.enum(['admin', 'user','parent'], {
      invalid_type_error: 'Enter a valid role',
    }),
  
    phone: z
      .string({ required_error: 'Phone number is required!' })
      .min(9, 'Please enter a valid phone!')
      .trim(),

  }),
});

// Validation for signIn
const signinValidationSchema = z.object({
  body: z.object({
    email: z
      .string({ required_error: 'Email is required.' })
      .trim()
      .email({ message: 'Please enter a valid email' }),
    password: z.string({ required_error: 'Password is required' }),
  }),
});

// exporting the schema
export const UserValidations = {
  userRegisterValidationSchema,
  signinValidationSchema,
};
