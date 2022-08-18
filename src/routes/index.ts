import Express, { Router } from 'express';
import Page404 from './404';
import V1ApiRouter from './v1';
import AdminRouter from './admin';

const router = Express.Router();
router.use('/api/v1/', V1ApiRouter);
router.use('/admin/', AdminRouter);
router.use(Page404);

export default router;
