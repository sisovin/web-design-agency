import { config } from '../config/env';
import db from '../config/db';
import redisClient from '../config/redis';

const cleanupExpiredSessions = async () => {
  try {
    // Remove expired sessions from the database
    await db.query('DELETE FROM sessions WHERE expires_at < NOW()');

    // Remove expired sessions from Redis
    const keys = await redisClient.keys('session:*');
    const pipeline = redisClient.pipeline();
    keys.forEach((key) => {
      pipeline.ttl(key, (err, ttl) => {
        if (ttl < 0) {
          pipeline.del(key);
        }
      });
    });
    await pipeline.exec();

    console.log('Expired sessions cleaned up successfully');
  } catch (error) {
    console.error('Error cleaning up expired sessions', error);
  }
};

// Schedule the cleanup job to run periodically
const scheduleCleanupJob = () => {
  const interval = config.cleanupInterval || 3600000; // Default to 1 hour
  setInterval(cleanupExpiredSessions, interval);
};

export default scheduleCleanupJob;
