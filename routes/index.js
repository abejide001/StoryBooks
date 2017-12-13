const express = require('express');
const passport = require('passport');
const router = express.Router();
const {ensureAuthenticated, ensureGuest} = require('../helpers/auth');

//Home page
router.get('/', ensureGuest, (req, res) => {
    res.render('index/welcome')
});

//Dashboard page
//ensureAuthenticated make sures that only signed in users can access the dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) => {
    res.render('index/dashboard');
});

//About page
router.get('/about', (req, res) => {
    res.render('index/about');
});

module.exports = router;