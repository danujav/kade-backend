//import express from 'express';
const express = require('express');
const app = express();

const customerRoutes = require('./routes/customer');
const itemRoutes = require('./routes/item');

//declare a port number
const port = 3000;

//middleware to parse json data
app.use(express.json());

app.use('/customers', customerRoutes);
app.use('/items', itemRoutes);



//open server on port 3000
//callback function is executed when server is opened
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})