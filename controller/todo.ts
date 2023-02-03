import Todo from '../todo';
import { validationResult } from "express-validator";
import { Request, Response } from 'express';

async function getAllTodo(req: Request, res: Response) {
    const todos = await Todo.find();
    res.json(todos);
};

async function getTodoById(req: Request, res: Response) {
    const id = req.params.id;
    const todo = await Todo.findById(id);

    if(todo === null) return res.status(404).json({ msg: 'Not Found'})

    res.json(todo);
};

async function registTodo(req: Request, res: Response) {

    const errors = validationResult(req);
    
    if(!errors.isEmpty()){
        const errs = errors.array();
        return res.status(400).json(errs);
    }

    const todo  = new Todo(req.body);
    const newTodo = await todo.save();
    res.status(201).json(newTodo);
};

async function updateTodo(req: Request, res: Response) {
    
    const errors = validationResult(req);
    
    if(!errors.isEmpty()){
        const errs = errors.array();
        return res.status(400).json(errs);
    }

    const id = req.params.id;
    const todo = await Todo.findById(id);

    if(todo === null) return res.status(404).json({ msg: 'Not Found'})

    const { name, status, deadline} = req.body;

    if(name !== undefined) todo.name = name;
    if(status !== undefined) todo.status = status;
    if(deadline !== undefined) todo.deadline = deadline;
    
    await todo!.save();

    res.json(todo);
};

async function deleteTodo(req: Request, res: Response) {

    const id = req.params.id;

    const { deletedCount } = await Todo.deleteOne({ id });
    
    if(deletedCount === 0) return res.status(404).json({ msg: 'Not Found'})

    res.json({ "msg" : "Delete Succeeded"});
};

export { registTodo, updateTodo, getAllTodo, getTodoById, deleteTodo };