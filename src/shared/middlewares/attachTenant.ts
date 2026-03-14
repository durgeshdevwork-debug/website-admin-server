import type { Response, NextFunction } from 'express';
import type { AuthenticatedRequest } from './authSession';
import { TenantModel } from '@modules/tenants/tenant.model';
import { UserModel } from '@modules/users/user.model';
import { sendError } from '@shared/utils/response';

export interface TenantRequest extends AuthenticatedRequest {
  tenantId?: string;
  userDoc?: any;
}

export async function attachTenant(
  req: TenantRequest,
  res: Response,
  next: NextFunction
) {
  try {
    if (!req.authUser) {
      return sendError(res, 'Not authenticated', 401);
    }

    const userDoc = await UserModel.findOne({ authUserId: req.authUser.id });
    if (!userDoc) {
      return sendError(res, 'User not found in app DB', 404);
    }

    const tenant = await TenantModel.findById(userDoc.tenantId);
    if (!tenant) {
      return sendError(res, 'Tenant not found', 404);
    }

    req.userDoc = userDoc;
    req.tenantId = tenant.id;
    return next();
  } catch (err) {
    return next(err);
  }
}

