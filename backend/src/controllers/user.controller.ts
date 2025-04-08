import { Request, Response } from 'express';
import { users } from '../schema/users';

export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await users.findOne({ id });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { username, email, firstName, lastName, phoneNumber, address, dateOfBirth, profilePicture, status } = req.body;

  try {
    const updatedUser = await users.update(
      { id },
      {
        username,
        email,
        firstName,
        lastName,
        phoneNumber,
        address,
        dateOfBirth,
        profilePicture,
        status,
      }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deletedUser = await users.delete({ id });

    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
