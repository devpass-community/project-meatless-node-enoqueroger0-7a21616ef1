const { insertQuery, selectQuery } = require('../config/configDB');

const getProducts = async() => {
    // TODO: Implement method
    const query = 'SELECT * FROM Products'
    return await selectQuery(query)
};

const addProduct = async(product) => {
    // TODO: Implement method
    const { description, full_description, category, price, restaurant_id, active } = product

    const query = `INSERT INTO Products (description, full_description, category, price, restaurant_id, active) VALUES('${description}', '${full_description}', '${category}', '${price}', '${restaurant_id}', '${active}')`
    return await insertQuery(query)
};

module.exports = {
    getProducts,
    addProduct
};