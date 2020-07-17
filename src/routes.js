const express = require('express');

const UserController = require('./controllers/UserController');
const ServicesController = require('./controllers/ServicesController');


const AuthController = require('./controllers/AuthController');


const authMiddleware = require('./middlewares/auth');

const routes = express.Router();

routes.post('/login', AuthController.login);

routes.get('/users',authMiddleware, UserController.index);
routes.post('/users', UserController.store);

routes.get('/users/:user_id/services', ServicesController.index);
routes.post('/users/:user_id/services', ServicesController.store);


module.exports = routes; 