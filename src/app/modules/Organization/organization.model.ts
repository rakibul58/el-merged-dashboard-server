import { Schema, model } from 'mongoose';
import { IOrganization } from './organization.interface';

// Organization schema
const organizationSchema = new Schema<IOrganization>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    adminRoutes: {
      type: [String],
      required: true,
    },
    schoolRoutes: {
      type: [String],
      required: true,
    },
    studentRoutes: {
      type: [String],
      required: true,
    },
    parentRoutes: {
      type: [String],
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

// removing the Organization or Organizations that are deleted
organizationSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

organizationSchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

export const Organization = model<IOrganization>(
  'Organization',
  organizationSchema,
);
