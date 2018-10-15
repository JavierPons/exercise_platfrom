var express 		        = require('express'),
	router 			        = express.Router(),
	bodyParser 	            = require('body-parser'),
	bcrypt			        = require('bcrypt-nodejs'),
	jwt				        = require('jsonwebtoken'),
	config			        = require('../config'),
	User			        = require('../models/User'),
	controller 				= require('../controllers/userController');

router.get('/', controller._find);
router.post('/register', controller._register);
router.post('/login',controller._login);
module.exports = router
