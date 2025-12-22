//Require express and initialize an express app instance
const express = require("express");
const app = express();
//Require dotenv to enable reading env vars from .env file
require('dotenv').config();

// import routers from controller folder
const tasks = require('./controllers/tasks');

//setup middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use('/tasks', tasks);

//setup listening port
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});