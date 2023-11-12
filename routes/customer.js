const express = require('express');
const router = express.Router();

const Customer = require('../model/customerModel');

router.get('/', async (req, res) => {
    const customers = await Customer.find({});

    res.status(200).json({
        success: true,
        data: customers
    });
});

router.get('/:id', async(req, res) => {

    const customer = await Customer.findById(req.params.id);

    res.status(200).json({
        success: true,
        data: customer
    });
});

router.post('/', async (req, res) => {
    const customer = await Customer.create(req.body);
    res.status(200).json({
        success: true,
        data: customer
    });
});

router.put('/:id', async(req, res) => {
    const customer = await Customer.findByIdAndUpdate(req.params.id, req.body);
    const updatedCustomer = await Customer.findById(req.params.id);
    res.status(200).json({
        success: true,
        data: updatedCustomer
    });
});

router.delete('/:id', async(req, res) => {
    const customer = await Customer.findByIdAndDelete(req.params.id);

    res.status(200).json({
        success: true,
        data: customer
    });
});

module.exports = router;