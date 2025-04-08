import * as argon2 from 'argon2';

export const hashPassword = async (password: string): Promise<string> => {
  try {
    const hash = await argon2.hash(password, {
      type: argon2.argon2id,
      memoryCost: 2 ** 16, // 64MB
      timeCost: 5,
      parallelism: 1,
    });
    return hash;
  } catch (err) {
    throw new Error('Error hashing password');
  }
};

export const verifyPassword = async (password: string, hash: string): Promise<boolean> => {
  try {
    return await argon2.verify(hash, password);
  } catch (err) {
    throw new Error('Error verifying password');
  }
};
