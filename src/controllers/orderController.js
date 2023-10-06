const { addOrder, getOrders } = require('../services/orderService');

const getOrdersEndpoint = async(req, res) => {
    // TODO: Implement method
    try {
        const allOrders = await getOrders()
        return res.json(allOrders)
    } catch (error) {
        return res.status(400).send(error)
    }
};

const addOrderEndpoint = async(req, res) => {
    // TODO: Implement method
    try {
        const { restaurant_id, product_id_list, subtotal, freight, user_id, status } = req.body
        const Orders = {
            restaurant_id: restaurant_id, 
            product_id_list: product_id_list,
            subtotal: subtotal,
            freight: freight,
            user_id: user_id,
            status: status
        }
        return res.status(201).json(Orders)
    } catch (error) {
        return res.status(400).send(error)
    }
};

module.exports = { 
    getOrdersEndpoint, 
    addOrderEndpoint 
};
  