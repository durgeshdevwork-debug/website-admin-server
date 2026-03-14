import mongoose, { Schema, type InferSchemaType } from 'mongoose';

const tenantSchema = new Schema(
  {
    name: { type: String, required: true },
    slug: { type: String }
  },
  { timestamps: true }
);

export type TenantDoc = InferSchemaType<typeof tenantSchema>;

export const TenantModel =
  mongoose.models.Tenant ?? mongoose.model('Tenant', tenantSchema);
