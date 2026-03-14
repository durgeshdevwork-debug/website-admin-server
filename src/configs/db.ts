
import mongoose from 'mongoose';
import { env } from './env';
import { logger } from './logger';

export async function connectDB() {
  try {
    await mongoose.connect(env.DATABASE_URL);
    logger.info('MongoDB connected');
  } catch (err) {
    logger.error({ err }, 'MongoDB connection error');
    process.exit(1);
  }
}

export async function disconnectDB() {
  await mongoose.disconnect();
  logger.info('MongoDB disconnected');
}
