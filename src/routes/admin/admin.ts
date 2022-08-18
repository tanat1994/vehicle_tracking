import { Router } from 'express';
import { vehicleLocation, vehiclesList } from '../../controllers/admin/admin';
const router = Router();

router.get('/vehicleList', vehiclesList);
router.post('/location', vehicleLocation);

export {
    router as AdminRouter
};