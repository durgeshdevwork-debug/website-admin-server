import { client , db } from '@configs/db';
import { env } from '@configs/env';
import { betterAuth } from 'better-auth';
import { mongodbAdapter } from 'better-auth/adapters/mongodb';

export const auth = betterAuth({
  baseURL: env.ADMIN_BASE_URL ?? env.API_BASE_URL,
  secret: env.BETTER_AUTH_SECRET,

  // use Mongo adapter with db (and optional client)[web:154][web:157]
  database: mongodbAdapter(db, {
    client // optional but recommended for transactions
  }),

  emailAndPassword: {
    enabled: true
  },

  experimental: {
    joins: true // optional, from docs
  }
});
