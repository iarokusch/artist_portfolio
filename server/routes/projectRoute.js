import express from 'express';
const router = express.Router();
import {
    addNewProject, getAllProjects
} from '../controllers/projectControllers.js'
router.get('/', getAllProjects)
router.post('/', addNewProject)
export default router