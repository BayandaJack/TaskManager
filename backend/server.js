//Require express and initialize an express app instance
const express = require("express");
const app = express();
//Require dotenv to enable reading env vars from .env file
require('dotenv').config();

//setup middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.send("Hi");
});

//setup listening port
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});