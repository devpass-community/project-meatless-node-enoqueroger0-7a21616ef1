const { Router } = require('express');
const { addProductEndpoint, getProductsEndpoint } = require('../controllers/productController');

const productRouter = Router();

//TODO: Add product endpoints
productRouter.get('/', getProductsEndpoint)
productRouter.post('/', addProductEndpoint)

module.exports = { productRouter };