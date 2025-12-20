//Require express and initialize an express app instance
const express = require("express");
const app = express();
//Require dotenv to enable reading env vars from .env file
require('dotenv').config();

//setup listening port
app.listen(() => {
    console.log(`Listening on port ${process.env.PORT}`);
})