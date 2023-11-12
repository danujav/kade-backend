const express = require('express');
const router = express.Router();

const Customer = require('../model/customerModel');

router.get('/', (req, res) => {
    res.send("Customers GET");
});

router.get('/:id', (req, res) => {
    res.send(`Customer with id ${req.params.id} is fetched.`);
});

router.post('/', async (req, res) => {
    const customer = await Customer.create(req.body);
    res.status(200).json({
        success: true,
        data: customer
    });
});

router.put('/:id', (req, res) => {
    res.send(`Customer with id ${req.params.id} is updated.`);
});

router.delete('/:id', (req, res) => {
    res.send(`Customer with id ${req.params.id} is deleted.`);
});

module.exports = router;