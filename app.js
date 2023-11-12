const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;

const customerRoutes = require('./routes/customer');
const itemRoutes = require('./routes/item');

//middleware to parse json data
app.use(express.json());

app.use('/api/customers', customerRoutes);
app.use('/api/items', itemRoutes);

mongoose.connect('mongodb+srv://admin:1234@kade.nfh5ulw.mongodb.net/kade?retryWrites=true&w=majority')
.then(() => {
    console.log('Connected to the Mongo Database!');
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    });
})
.catch((e) => {
    console.log(`Connection failed: ${e.message}`);
});