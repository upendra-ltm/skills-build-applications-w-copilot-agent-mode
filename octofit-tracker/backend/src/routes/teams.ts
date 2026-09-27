import { Router } from 'express';
import Team from '../models/Team.js';

const router = Router();

router.get('/', async (_request, response, next) => {
  try {
    response.json(await Team.find().populate('members', 'username displayName'));
  } catch (error) {
    next(error);
  }
});

export default router;
