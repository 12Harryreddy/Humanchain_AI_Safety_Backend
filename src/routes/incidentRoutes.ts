import { Router } from 'express';
import { getAllIncidents, createIncident, getIncidentById, deleteIncident } from '../controllers/incidentController';
import { authenticateToken } from '../middlewares/authMiddleware';

const router = Router();

router.get('/', authenticateToken, getAllIncidents);
router.post('/', authenticateToken, createIncident);
router.get('/:id', authenticateToken, getIncidentById);
router.delete('/:id', authenticateToken, deleteIncident);

export default router;
