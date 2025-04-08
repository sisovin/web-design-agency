import jwt from 'jsonwebtoken';
import { config } from '../config/env';

export const signJwt = (payload: object) => {
  return jwt.sign(payload, config.jwtSecret, { expiresIn: '1h' });
};

export const verifyJwt = (token: string) => {
  try {
    return jwt.verify(token, config.jwtSecret);
  } catch (error) {
    return null;
  }
};

// New function to include new claims
export const signJwtWithClaims = (payload: object, claims: object) => {
  const combinedPayload = { ...payload, ...claims };
  return jwt.sign(combinedPayload, config.jwtSecret, { expiresIn: '1h' });
};
