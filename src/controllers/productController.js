const { addProduct, getProducts } = require('../services/productService');

const getProductsEndpoint = async(req, res) => {
    // TODO: Implement method
    try {
        const allProduct = await getProducts()
        return res.json(allProduct)
    } catch (error) {
        return res.status(400).send(error)
    }
};

const addProductEndpoint = async(req, res) => {
    // TODO: Implement method
    const { description, full_description, category, price, restaurant_id, active } = req.body
    const product = {
        description: description,
        full_description: full_description,
        category: category,
        price: price,
        restaurant_id: restaurant_id,
        active: active
    }
    try {
        await addProduct(product)
        return res.status(201).json(product)
    } catch (error) {
        return res.status(400).send(error)
    }
};

module.exports = { 
    getProductsEndpoint, 
    addProductEndpoint 
};