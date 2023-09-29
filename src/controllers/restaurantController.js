const { addRestaurant, getRestaurants } = require('../services/restaurantService');

const getRestaurantsEndpoint = async(req, res) => {
    // TODO: Implement method
    try {
        const allRestaurants = await getRestaurants()
        return res.json(allRestaurants)
    } catch (error) {
        return res.send(error)
    }
};

const addRestaurantEndpoint = async(req, res) => {
    // TODO: Implement method
    const restaurant = {
        "name": "HappyCow",
        "category": "Vegan Food",
        "address": "1391 E 41st Ave, Vancouver, BC V5W 1R7, Canadá",
        "active": true
    }
    try {
        const newRestaurant = await addRestaurant(restaurant)
        return res.status(201).json(restaurant)
    } catch (error) {
        return res.send(error)
    }
    
};

module.exports = { 
    getRestaurantsEndpoint, 
    addRestaurantEndpoint 
};