import { Router } from 'express';
import Workout from '../models/Workout.js';

const router = Router();

router.get('/', async (_request, response, next) => {
  try {
    response.json(await Workout.find().sort({ category: 1, title: 1 }));
  } catch (error) {
    next(error);
  }
});

export default router;
