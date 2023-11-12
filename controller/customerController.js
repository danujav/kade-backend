const Customer = require("../model/customerModel");

module.exports = {
    getAll: async (req, res) => {
        try {
            const customers = await Customer.find({});

            res.status(200).json({
                success: true,
                data: customers
            });
        } catch (e) {
            console.log(e.message);
        }
    },
    getById: async (req, res) => {
        try {
            const customer = await Customer.findById(req.params.id);

            res.status(200).json({
                success: true,
                data: customer
            });
        } catch (e) {
            console.log(e.message);
        }
    },
    create: async (req, res) => {
        try {
            const customer = await Customer.create(req.body);

            res.status(200).json({
                success: true,
                data: customer
            });
        } catch (e) {
            console.log(e.message);
        }
    },
    update: async (req, res) => {
        try {
            const customer = await Customer.findByIdAndUpdate(req.params.id, req.body);

            const updatedCustomer = await Customer.findById(req.params.id);
            res.status(200).json({
                success: true,
                data: updatedCustomer
            });
        } catch (e) {
            console.log(e.message);
        }
    },
    delete: async (req, res) => {
        try {
            const customer = await Customer.findByIdAndDelete(req.params.id);

            res.status(200).json({
                success: true,
                data: customer
            });
        } catch (e) {
            console.log(e.message);
        }
    }
}