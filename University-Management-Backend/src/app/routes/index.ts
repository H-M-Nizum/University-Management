import express from 'express';
import { StudentRoutes } from '../modules/student/student.route';
import { UserRoutes } from '../modules/user/user.route';

const router = express.Router();

// Application routes
router.use('/students', StudentRoutes);
router.use('/users', UserRoutes);

export default router;
