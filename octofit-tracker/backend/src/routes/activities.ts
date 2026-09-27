import { Router } from 'express';
import Activity from '../models/Activity.js';

const router = Router();

router.get('/', async (_request, response, next) => {
  try {
    response.json(await Activity.find().populate('user', 'username displayName').populate('team', 'name').sort({ recordedAt: -1 }));
  } catch (error) {
    next(error);
  }
});

export default router;
