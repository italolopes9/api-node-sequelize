const express = require('express');

const UserController = require('./controllers/UserController');
const ServiceController = require('./controllers/ServiceController');
const CategoryController = require('./controllers/CategoryController');

const AuthController = require('./controllers/AuthController');


const authMiddleware = require('./middlewares/auth');

const routes = express.Router();

routes.post('/login', AuthController.login);

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.get('/users/:user_id/services', ServiceController.index);
routes.post('/users/:user_id/services', ServiceController.store);

routes.get('/categories', CategoryController.index);
routes.post('/categories', CategoryController.store);


module.exports = routes; 