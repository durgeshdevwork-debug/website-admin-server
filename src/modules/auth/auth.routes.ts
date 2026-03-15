
import { Router } from 'express';
import { fromNodeHeaders } from 'better-auth/node';
import { auth } from '../../shared/utils/auth';
import { sendSuccess, sendError } from '@shared/utils/response';

export const authRouter = Router();

authRouter.get('/profile', async (req, res, next) => {
  try {
    const session = await auth.api.getSession({
      headers: fromNodeHeaders(req.headers)
    });

    if (!session) {
      return sendError(res, 'Not authenticated', 401);
    }

    // you can fetch extra user data here if stored in your DB
    return sendSuccess(res, session.user, 'Profile fetched');
  } catch (err) {
    next(err);
  }
});

