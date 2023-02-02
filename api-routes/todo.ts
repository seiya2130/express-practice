import express from 'express';
import Todo from '../todo';
import { body } from "express-validator";
import { registTodo, updateTodo, getAllTodo, getTodoById, deleteTodo } from '../controller/todo';

const router = express.Router();

router.get('/', 
    getAllTodo
);

router.get('/:id', 
    getTodoById
);

router.post('/', 
    body('name').notEmpty(),
    body('status').notEmpty().isInt({ min: 0, max: 2 }),
    body('deadline').notEmpty(),
    registTodo
);

router.patch('/:id',
    body('name').optional().notEmpty(),
    body('status').optional().notEmpty().isInt({ min: 0, max: 2 }),
    body('deadline').optional().notEmpty(),
    updateTodo
);

router.delete('/:id', 
    deleteTodo
);

export default router;