import { Request, Response, NextFunction } from 'express';
import { config } from '../config/env';

const rolesPermissions = {
  admin: ['create', 'read', 'update', 'delete'],
  user: ['read'],
  guest: ['read'],
  // New roles and permissions
  manager: ['create', 'read', 'update'],
  editor: ['create', 'read', 'update'],
};

export const checkRole = (role: string, permission: string) => {
  return rolesPermissions[role]?.includes(permission);
};

export const authorize = (requiredPermission: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const userRole = req.user?.role;

    if (!userRole || !checkRole(userRole, requiredPermission)) {
      return res.status(403).json({ message: 'Forbidden' });
    }

    next();
  };
};
