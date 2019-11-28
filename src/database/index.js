const Sequelize = require('sequelize');
const dbConfig = require('../config/db');

const User = require('../models/User');
const Restaurant = require('../models/Restaurant');
const Meal = require('../models/Meal');
const Order = require('../models/Order');

const connection = new Sequelize(dbConfig);

User.init(connection);
Restaurant.init(connection);
Meal.init(connection);
Order.init(connection);

Restaurant.associate(connection.models);
Meal.associate(connection.models);

module.exports = connection;