import { Schema, model } from 'mongoose';

const todoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        enum: [0 , 1, 2],
        required: true
    },
    deadline: {
        type: Date,
        required: true
    }
})

const Todo  = model('Todo', todoSchema);
export default Todo;