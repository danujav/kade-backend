const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
        id: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: [true, 'Customer name is required!'],
            minLength: 3,
            maxLength: 50
        },
        address: {
            type: String,
            required: true,
            minLength: 3,
            maxLength: 500
        },
        tel: {
            type: String,
            required: true,
            minLength: 3,
            maxLength: 15
        },
    },
    {
        timestamps: true
    }
);

const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;
