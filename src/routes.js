const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const routes = express.Router();
const upload = multer(uploadConfig);

//CONTROLLERS AQUI
const UserController = require('./controllers/UserController');
const RestaurantController = require('./controllers/RestaurantController');
const MealController = require('./controllers/MealController');
const OrderController = require('./controllers/OrderController');

//ROTAS
routes.post('/users', UserController.store);
routes.get('/users/:email', UserController.search);
routes.post('/restaurants', upload.single('thumbnail'), RestaurantController.store);
routes.get('/restaurants', RestaurantController.index);
routes.post('/meals', upload.single('thumbnail'), MealController.store);
routes.get('/meals/:restaurant_id', MealController.search);
routes.post('/order', OrderController.store);

module.exports = routes;