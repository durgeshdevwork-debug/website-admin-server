import { Router } from 'express';
import type { TenantRequest } from '@shared/middlewares/attachTenant';
import { authSession } from '@shared/middlewares/authSession';
import { attachTenant } from '@shared/middlewares/attachTenant';
import { SiteModel } from './site.model';
import { sendSuccess } from '@shared/utils/response';

export const sitesRouter = Router();

// GET /api/admin/sites – list sites for current tenant
sitesRouter.get(
  '/',
  authSession,
  attachTenant,
  async (req: TenantRequest, res, next) => {
    try {
      const sites = await SiteModel.find({ tenantId: req.tenantId });
      return sendSuccess(res, sites, 'Sites fetched');
    } catch (err) {
      next(err);
    }
  }
);

// POST /api/admin/sites – create site for current tenant
sitesRouter.post(
  '/',
  authSession,
  attachTenant,
  async (req: TenantRequest, res, next) => {
    try {
      const payload = req.body; // validate with Zod later
      const site = await SiteModel.create({
        tenantId: req.tenantId,
        name: payload.name,
        slug: payload.slug,
        templateId: payload.templateId
      });
      return sendSuccess(res, site, 'Site created', 201);
    } catch (err) {
      next(err);
    }
  }
);

