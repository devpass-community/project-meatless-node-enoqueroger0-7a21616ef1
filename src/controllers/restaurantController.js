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
    const { name, category, address, active } = req.body;
    const restaurant = {
        name: name,
        category: category,
        address: address,
        active: active
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