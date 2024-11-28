const express = require('express');
const app = express();
const cors = require('cors');
const { default: mongoose } = require('mongoose');
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

    } catch (error) {
        res.status(500).send(error.message);
    }
});
app.get('/todos', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).send(error.message);
    }
});
app.put('todo/:id', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).send(error.message);
    }
});


// Connection
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('App running in port: ' + PORT);
});