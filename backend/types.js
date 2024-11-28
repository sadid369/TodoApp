const zod = require('zod');

const createTodo = zod.object({
    title: zod.string().min(3, 'Title must be at least 3 characters long'),
    description: zod.string().min(3, 'Description must be at least 3 characters long'),
});
const updateTodo = zod.object({
    id: zod.string(),
});

module.exports = { createTodo, updateTodo };