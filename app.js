const express = require('express');
const mongoose = require('mongoose');

const app = express();

const port = process.env.PORT || 5500;

app.get('/', (req, res) => {
    res.send('It works!')
});

app.listen(port, () => {
    console.log(`Sever started on port ${port}`)
});