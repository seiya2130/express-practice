import express from 'express';
import Todo from '../todo';

const router = express.Router();

router.get('/', async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const todo = await Todo.findById(id);
    res.json(todo);
});

router.post('/', async(req, res) => {
    const todo  = new Todo(req.body);
    const newTodo = await todo.save();
    res.json(newTodo);
});

router.patch('/:id', async (req, res) => {
    const id = req.params.id;
    const todo = await Todo.findById(id);

    const { name, status, deadline} = req.body;

    if(todo !== null){
        todo.name = name;
        todo.status = status;
        todo.deadline = deadline
        await todo!.save();
    }

    res.json(todo);
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    await Todo.deleteOne({ id });
    res.json({ "msg" : "Delete Succeeded"});
});

export default router;