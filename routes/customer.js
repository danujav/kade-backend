const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Customers GET");
});

router.get('/:id', (req, res) => {
    res.send(`Customer with id ${req.params.id} is fetched.`);
});

router.post('/', (req, res) => {
    res.send(req.body);
});

router.put('/:id', (req, res) => {
    res.send(`Customer with id ${req.params.id} is updated.`);
});

router.delete('/:id', (req, res) => {
    res.send(`Customer with id ${req.params.id} is deleted.`);
});

module.exports = router;