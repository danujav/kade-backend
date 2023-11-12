//import express from 'express';
const express = require('express');
const app = express();

//declare a port number
const port = 3000;

//middleware to parse json data
app.use(express.json());

//declare a route for GET /
app.get('/', (req, res) => {
    // console.log('Hello Express!');
    res.send("Hello Express!");
});

app.post('/', (req, res) => {
    /* console.log(req.body.id);
     console.log(req.body.name);*/
    console.log(req.body)
    res.send(req.body);
});

app.get('/customers', (req, res) => {
    res.send("Customers GET");
});

app.post('/customers', (req, res) => {
    res.send(req.body);
})

app.delete("/customers/:id", (req, res) => {
    res.send(`Customer with id ${req.params.id} is deleted`);
})

app.put('/customers/:id', (req, res) => {
    console.log(req.body);
    res.send(`Customer with id ${req.params.id} is updated.`);
})

app.get('/customers/:id', (req, res) => {
    res.send(`Customer with id ${req.params.id} is fetched.`);
});

//open server on port 3000
//callback function is executed when server is opened
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})