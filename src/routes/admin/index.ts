import { Router } from 'express';
import { AdminRouter } from './admin';
const router = Router();

router.use(AdminRouter);

export default router;