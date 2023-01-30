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

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    await Todo.deleteOne({ id });
    res.json({ "msg" : "Delete Succeeded"});
});


export default router;