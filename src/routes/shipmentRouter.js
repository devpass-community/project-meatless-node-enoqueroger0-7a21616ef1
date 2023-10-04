const { Router } = require('express');
const { addShipmentEndpoint, getShipmentsEndpoint } = require('../controllers/shipmentController');

const shipmentRouter = Router();

//TODO: Add shipment endpoints
shipmentRouter.get('/', getShipmentsEndpoint)

shipmentRouter.post('/', addShipmentEndpoint)
module.exports = { shipmentRouter };