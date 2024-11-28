const mongoose = require('mongoose');

const todoSchema = mongoose.Schema(
    {
        title: String,
        description: String,
        completed: Boolean,
    },
    {
        timestamps: true,
    }
);

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;

