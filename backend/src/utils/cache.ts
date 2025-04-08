import redis from 'redis';
import { config } from '../config/env';

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
  password: config.redisPassword,
  tls: config.redisTls ? {} : undefined,
});

client.on('error', (err) => {
  console.error('Redis client error', err);
});

client.connect();

export const setCache = async (key: string, value: any, expiration: number) => {
  try {
    await client.set(key, JSON.stringify(value), {
      EX: expiration,
    });
  } catch (error) {
    console.error('Error setting cache', error);
  }
};

export const getCache = async (key: string) => {
  try {
    const value = await client.get(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error('Error getting cache', error);
    return null;
  }
};

export const deleteCache = async (key: string) => {
  try {
    await client.del(key);
  } catch (error) {
    console.error('Error deleting cache', error);
  }
};
