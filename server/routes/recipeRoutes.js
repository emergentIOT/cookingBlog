const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController.js');


//App routes

router.get('/', recipeController.homePage);


module.exports = router;