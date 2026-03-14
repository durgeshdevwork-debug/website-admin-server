
import type { Application } from 'express';
import { healthRouter } from '@modules/health/health.routes';
import { sitesRouter } from '@modules/sites/sites.routes';

export function registerRoutes(app: Application) {
  app.use('/api/health', healthRouter);
  app.use('/api/admin/sites', sitesRouter);
}

