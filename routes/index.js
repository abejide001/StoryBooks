const express = require('express');
const passport = require('passport');
const router = express.Router();

//Home page
router.get('/', (req, res) => {
    res.render('index/welcome')
});

//Dashboard page
router.get('/dashboard', (req, res) => {
    res.send('Dashboard');
});

module.exports = router;