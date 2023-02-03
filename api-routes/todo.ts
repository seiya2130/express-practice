import express from 'express';
import Todo from '../todo';
import { body } from "express-validator";
import { registTodo, updateTodo, getAllTodo, getTodoById, deleteTodo } from '../controller/todo';
import { requestErrorHandler } from '../helper';


const router = express.Router();

router.get('/', requestErrorHandler(getAllTodo));

router.get('/:id', requestErrorHandler(getTodoById));

router.post('/', 
    body('name').notEmpty(),
    body('status').notEmpty().isInt({ min: 0, max: 2 }),
    body('deadline').notEmpty(),
    requestErrorHandler(registTodo)
);

router.patch('/:id',
    body('name').optional().notEmpty(),
    body('status').optional().notEmpty().isInt({ min: 0, max: 2 }),
    body('deadline').optional().notEmpty(),
    requestErrorHandler(updateTodo)
);

router.delete('/:id', requestErrorHandler(deleteTodo));

export default router;