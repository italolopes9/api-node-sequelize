const express = require('express');

const UserController = require('./controllers/UserController');
const AuthController = require('./controllers/AuthController');


const authMiddleware = require('./middlewares/auth');

const routes = express.Router();

routes.post('/login', AuthController.login);

routes.get('/users',authMiddleware, UserController.index);
routes.post('/users', UserController.store);

module.exports = routes; 