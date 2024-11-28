const express = require('express');
const app = express();
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const { createTodo, updateTodo } = require('./types');
const Todo = require('./db');
require('dotenv').config();

// Mongo DB Connections
mongoose.connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(response => {
    console.log('MongoDB Connection Succeeded.');
}).catch(error => {
    console.log('Error in DB connection: ' + error);
});

// Middleware Connections
app.use(cors());
app.use(express.json());


// Routes
app.post('/todo', async (req, res) => {
    try {
        const createPayload = req.body;
        const parsedPayload = createTodo.safeParse(createPayload);
        if (!parsedPayload.success) {
            return res.status(411).json({ msg: "You sent the wrong input" + parsedPayload.error });
        }
        const { title, description, completed } = createPayload;
        console.log(title, description);
        const todo = await Todo.create({ title, description, completed });
        res.status(201).json(todo);

    } catch (error) {
        return res.status(500).send(error.message);
    }
});
app.get('/todos', async (req, res) => {
    try {
        const todos = await Todo.find({});
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).send(error.message);
    }
});
app.put('/completed', async (req, res) => {
    try {
        const createPayload = req.body;
        const parsedPayload = updateTodo.safeParse(createPayload);
        if (!parsedPayload.success) {
            return res.status(411).json({ msg: "You sent the wrong input" + parsedPayload.error });
        }
        const { id } = createPayload;
        const todo = await Todo.findOneAndUpdate({ _id: id }, { completed: true }, { new: true });
        res.status(201).json(todo);
    } catch (error) {
        res.status(500).send(error.message);
    }
});


// Connection
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('App running in port: ' + PORT);
});