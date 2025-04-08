import { Request, Response } from 'express';
import { users } from '../schema/users';
import { config } from '../config/env';
import { signJwt } from '../utils/jwt';
import { hashPassword, verifyPassword } from '../utils/argon2';

export const register = async (req: Request, res: Response) => {
  const { username, email, password, firstName, lastName, phoneNumber, address, dateOfBirth, profilePicture } = req.body;

  try {
    const hashedPassword = await hashPassword(password);

    const newUser = await users.create({
      username,
      email,
      password: hashedPassword,
      firstName,
      lastName,
      phoneNumber,
      address,
      dateOfBirth,
      profilePicture,
      role: 'user',
      status: 'active',
    });

    const token = signJwt({ id: newUser.id, role: newUser.role });

    res.status(201).json({ token, user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await users.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isPasswordValid = await verifyPassword(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = signJwt({ id: user.id, role: user.role });

    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
