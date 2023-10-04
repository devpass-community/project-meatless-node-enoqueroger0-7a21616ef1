const { addShipment, getShipments } = require('../services/shipmentService');

const getShipmentsEndpoint = async(req, res) => {
    // TODO: Implement method
    try {
        const allShipments = await getShipments()
        return res.json(allShipments) 
    } catch (error) {
        return res.status(400).send(error)
    }
};

const addShipmentEndpoint = async(req, res) => {
    // TODO: Implement method
    try {
        const { distance_km, price } = req.body;
        const shipment = {
            distance_km: distance_km,
            price: price
        }
        await addShipment(shipment)
        return res.status(201).json(shipment)
    } catch (error) {
        return res.status(400).send(error)
    }
};

module.exports = { 
    getShipmentsEndpoint, 
    addShipmentEndpoint 
};