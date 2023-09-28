const { insertQuery, selectQuery } = require('../config/configDB');

const getRestaurants = async() => {
    // TODO: Implement method
    const query = 'SELECT * FROM Restaurants'
    return await selectQuery(query)
};

const addRestaurant = async(restaurant) => {
    // TODO: Implement method
    const { name, category, address, active } = restaurant
    const query = `INSERT INTO Restaurants (name, category, address, active) VALUES ('${name}', '${category}', '${address}', '${active}')`
    return await insertQuery(query)
};

module.exports = {
    getRestaurants,
    addRestaurant
};