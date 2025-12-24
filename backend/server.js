//Require express and initialize an express app instance
const express = require("express");
const app = express();
const db = require('./models');
const cors = require('cors');
//Require dotenv to enable reading env vars from .env file
require('dotenv').config();

// import routers from controller folder
const tasks = require('./controllers/tasks');

// to allow cross origin requests (frontend -> backend)
app.use(cors());

//setup middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// to parse data as json objects
app.use(express.json());

app.use('/tasks', tasks);

//SECTION FOR USING SEQUELIZE ORM
db.sequelize.sync()
    .then(() => {
        //setup listening port
        app.listen(process.env.PORT, () => {
            console.log(`Listening on port ${process.env.PORT}`);
        });
    });