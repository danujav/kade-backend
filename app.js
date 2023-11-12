//import express from 'express';
const express = require('express');
const app = express();

const mongoose = require('mongoose');
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
});

mongoose.connect('mongodb+srv://admin:1234@kade.nfh5ulw.mongodb.net/kade?retryWrites=true&w=majority')
.then(() => {
    console.log('Connected to the Mongo Database!');
})
.catch((e) => {
    console.log(`Connection failed: ${e.message}`);
});