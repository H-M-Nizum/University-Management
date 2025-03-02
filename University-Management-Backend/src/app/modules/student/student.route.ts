import express from 'express';
import { studentController } from './student.controller';

const router = express.Router();

// will call controller function
router.get('/', studentController.GetAllStudent);
router.get('/:studentID', studentController.GetSingleStudent);

export const StudentRoutes = router;
