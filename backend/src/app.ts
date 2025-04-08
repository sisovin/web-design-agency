import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { config } from './config/env';
import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';
import adminRoutes from './routes/admin.routes';
import servicesRoutes from './routes/services.routes';
import { authenticateJWT } from './middleware/auth.middleware';
import { authorize } from './middleware/rbac.middleware';
import { errorHandler } from './middleware/error.middleware';

const app = express();

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('combined'));

app.use('/auth', authRoutes);
app.use('/user', authenticateJWT, authorize('user'), userRoutes);
app.use('/admin', authenticateJWT, authorize('admin'), adminRoutes);
app.use('/services', servicesRoutes);

app.use(errorHandler);

export default app;
