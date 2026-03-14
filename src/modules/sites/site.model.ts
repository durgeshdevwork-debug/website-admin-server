import mongoose, { Schema, type InferSchemaType } from 'mongoose';

const siteSchema = new Schema(
  {
    tenantId: { type: Schema.Types.ObjectId, ref: 'Tenant', required: true },
    name: { type: String, required: true },
    slug: { type: String, required: true },
    templateId: { type: String }
  },
  { timestamps: true }
);

export type SiteDoc = InferSchemaType<typeof siteSchema>;

export const SiteModel =
  mongoose.models.Site ?? mongoose.model('Site', siteSchema);
