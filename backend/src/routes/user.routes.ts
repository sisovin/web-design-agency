import { Router } from 'express';
import { getUser, updateUser, deleteUser } from '../controllers/user.controller';
import { authenticateJWT } from '../middleware/auth.middleware';
import { authorize } from '../middleware/rbac.middleware';

const router = Router();

router.get('/:id', authenticateJWT, authorize('read'), getUser);
router.put('/:id', authenticateJWT, authorize('update'), updateUser);
router.delete('/:id', authenticateJWT, authorize('delete'), deleteUser);

export default router;
