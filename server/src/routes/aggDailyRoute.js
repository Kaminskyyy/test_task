import express from 'express';
import * as aggDailyController from '../controller/aggDailyController.js';

const router = express.Router();

router.get('/aggDaily', aggDailyController.get);

export default router;
