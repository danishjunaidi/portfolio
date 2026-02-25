import express from 'express';
import {
  getAllProjects,
  getProjectById,
  getProjectsByType,
} from '../controllers/projectController.js';

const router = express.Router();

router.get('/', getAllProjects);
router.get('/:id', getProjectById);
router.get('/filter/type', getProjectsByType);

export default router;
