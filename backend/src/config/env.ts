import * as dotenv from 'dotenv';
import * as Joi from 'joi';

dotenv.config();

const envSchema = Joi.object({
  NODE_ENV: Joi.string().valid('development', 'production', 'test').required(),
  PORT: Joi.number().default(3000),
  DATABASE_URL: Joi.string().required(),
  REDIS_URL: Joi.string().required(),
  JWT_SECRET: Joi.string().required(),
  NEW_FEATURE_FLAG: Joi.boolean().default(false), // New environment variable
  NEW_API_KEY: Joi.string().optional(), // New environment variable
}).unknown();

const { error, value: envVars } = envSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

export const config = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  databaseUrl: envVars.DATABASE_URL,
  redisUrl: envVars.REDIS_URL,
  jwtSecret: envVars.JWT_SECRET,
  newFeatureFlag: envVars.NEW_FEATURE_FLAG, // Export new environment variable
  newApiKey: envVars.NEW_API_KEY, // Export new environment variable
};
