const { Router } = require('express');
const { addRestaurantEndpoint, getRestaurantsEndpoint } = require('../controllers/restaurantController');

const restaurantRouter = Router();

//TODO: Add restaurant endpoints
restaurantRouter.get('/', getRestaurantsEndpoint)

restaurantRouter.post('/', addRestaurantEndpoint)

module.exports = { restaurantRouter };