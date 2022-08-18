import { Router } from 'express';
import { VehicleRouter } from './vehicle';
const router = Router();

router.use('/vehicle', VehicleRouter);

export default router;