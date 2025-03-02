import express from 'express';
import { StudentRoutes } from '../modules/student/student.route';
import { UserRoutes } from '../modules/user/user.route';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route';

const router = express.Router();

// Application routes
router.use('/students', StudentRoutes);
router.use('/users', UserRoutes);
router.use('/semesters', AcademicSemesterRoutes);

export default router;
