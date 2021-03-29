// Importing/requiring modules/files
const express = require('express');
const router = express.Router();
const pageController = require('./controllers/pageController');

// Creating get request routes for web pages
router.get('/', pageController.indexController);
router.get('/web-development', pageController.webController);
router.get('/graphic-digital', pageController.graphicController);
router.get('/painting', pageController.paintingController);
router.get('/about', pageController.aboutController);

// Creating post request route for register form field in index page
router.post('/register', pageController.registerController);

// Creating post request route for login form field in index page
router.post('/login', pageController.loginController);

// Exporting routes to use in app.js
module.exports = router;