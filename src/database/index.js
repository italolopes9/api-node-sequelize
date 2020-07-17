const Sequelize = require('sequelize');
dbConfig = require('../config/database');

const User = require('../models/User');
const Service = require('../models/Service');


const connection = new Sequelize(dbConfig);

User.init(connection);
Service.init(connection);

Service.associate(connection.models);
User.associate(connection.models);

module.exports = connection;