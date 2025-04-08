import { Router } from 'express';
import { getServices, updateService, deleteService } from '../controllers/services.controller';
import { authenticateJWT } from '../middleware/auth.middleware';
import { authorize } from '../middleware/rbac.middleware';

const router = Router();

router.get('/', authenticateJWT, authorize('read'), getServices);
router.put('/:id', authenticateJWT, authorize('update'), updateService);
router.delete('/:id', authenticateJWT, authorize('delete'), deleteService);

export default router;
