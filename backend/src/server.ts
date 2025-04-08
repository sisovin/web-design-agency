import app from './app';
import { config } from './config/env';
import db from './config/db';
import redisClient from './config/redis';

const PORT = config.port || 3000;

const startServer = async () => {
  try {
    await db.connect();
    await redisClient.connect();

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
