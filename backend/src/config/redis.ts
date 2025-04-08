import * as redis from 'redis';
import { config } from './env';

const client = redis.createClient({
  url: config.redisUrl,
  socket: {
    reconnectStrategy: (retries) => {
      if (retries > 5) {
        return new Error('Retry limit reached');
      }
      return Math.min(retries * 50, 2000);
    },
  },
  // New configuration options
  password: config.redisPassword,
  tls: config.redisTls ? {} : undefined,
});

client.on('error', (err) => {
  console.error('Redis client error', err);
});

client.connect();

export default client;
