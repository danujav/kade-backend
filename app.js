//import express from 'express';
const express = require('express');
const app = express();

//declare a port number
const port = 3000;

//declare a route for GET /
app.get('/', (req, res) => {
    console.log('Hello Express!');
    res.send("<h1>Lamai!</h1>");
})

//open server on port 3000
//callback function is executed when server is opened
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})