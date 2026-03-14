
import { env } from './configs/env.js';
import { betterAuth } from 'better-auth';

// PSEUDO-CONFIG: replace with real adapter + providers from Better Auth docs
export const auth = betterAuth({
  baseURL: env.BETTER_AUTH_BASE_URL ?? env.API_BASE_URL,
  secret: env.BETTER_AUTH_SECRET,
  // adapter: ...,  // Kysely / Prisma / SQL adapter per docs
  // emailAndPassword: { enabled: true },
  // plugins: [...]
});
