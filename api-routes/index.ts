import todosRouter from './todo';
import express from 'express';

const router = express.Router();
router.use('/todos', todosRouter);

export default router;
