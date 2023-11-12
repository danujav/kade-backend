const Customer = require("../model/customerModel");

module.exports = {
    getAll: async (req, res) => {
        const customers = await Customer.find({});

        res.status(200).json({
            success: true,
            data: customers
        });
    },
    getById: async (req, res) => {
        const customer = await Customer.findById(req.params.id);

        res.status(200).json({
            success: true,
            data: customer
        });
    },
    create: async (req, res) => {
        const customer = await Customer.create(req.body);

        res.status(200).json({
            success: true,
            data: customer
        });
    },
    update: async (req, res) => {
        const customer = await Customer.findByIdAndUpdate(req.params.id, req.body);

        const updatedCustomer = await Customer.findById(req.params.id);
        res.status(200).json({
            success: true,
            data: updatedCustomer
        });
    },
    delete: async (req, res) => {
        const customer = await Customer.findByIdAndDelete(req.params.id);

        res.status(200).json({
            success: true,
            data: customer
        });
    }
}