const { insertQuery, selectQuery } = require('../config/configDB');

const getOrders = async() => {
    // TODO: Implement method
    const query = `SELECT * FROM Orders`
    return await selectQuery(query)
};

const addOrder = async(order) => {
    // TODO: Implement method
    const { restaurant_id, product_id_list, subtotal, freight, user_id, status } = order
    const Orders_query = `INSERT INTO Orders (restaurant_id, subtotal, freight, total_price, user_id, status) VALUES ('${restaurant_id}', '${subtotal}', '${freight}', '${user_id}', '${status}')`;
    const order_id = await insertQuery(Orders_query);

    return await product_id_list.array.forEach(product_id => {
        const query = `INSERT INTO Order_Products (order_id, product_id) VALUES ('${order_id}', '${product_id}')`
        insertQuery(query)
    });
};

module.exports = {
    getOrders,
    addOrder
};