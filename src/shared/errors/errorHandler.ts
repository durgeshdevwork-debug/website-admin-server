
import type { NextFunction, Request, Response } from 'express';
import { AppError } from './AppError.js';
import { logger } from '../../configs/logger.js';
import { sendError } from '../utils/response.js';

export function errorHandler(
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  if (err instanceof AppError) {
    logger.warn({ err }, 'AppError');
    return sendError(res, err.message, err.statusCode, err.details);
  }

  logger.error({ err }, 'Unhandled error');
  return sendError(res);
}
