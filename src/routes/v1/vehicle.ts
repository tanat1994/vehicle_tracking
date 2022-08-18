import { Router } from 'express';
import { recordLocation, register } from '../../controllers/vehicle';
const router = Router();

router.post('/register', register);
router.post('/recordLocation', recordLocation);

export {
    router as VehicleRouter
};