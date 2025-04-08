import { Router } from 'express';
import { getProjects, updateProject, deleteProject, getServices, updateService, deleteService } from '../controllers/admin.controller';
import { authenticateJWT } from '../middleware/auth.middleware';
import { authorize } from '../middleware/rbac.middleware';

const router = Router();

router.get('/projects', authenticateJWT, authorize('read'), getProjects);
router.put('/projects/:id', authenticateJWT, authorize('update'), updateProject);
router.delete('/projects/:id', authenticateJWT, authorize('delete'), deleteProject);

router.get('/services', authenticateJWT, authorize('read'), getServices);
router.put('/services/:id', authenticateJWT, authorize('update'), updateService);
router.delete('/services/:id', authenticateJWT, authorize('delete'), deleteService);

export default router;
