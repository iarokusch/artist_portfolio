import express from 'express';
const router = express.Router();
import {
    getAllProjects, addNewProject
} from '../controllers/projectControllers.js'
router.get('/', getAllProjects)
router.post('/', addNewProject)
export default router