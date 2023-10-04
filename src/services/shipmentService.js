const { insertQuery, selectQuery } = require('../config/configDB');

const getShipments = async() => {
    // TODO: Implement method
    const query = `SELECT * FROM Shipments`
    return await selectQuery(query)
};

const addShipment = async(shipment) => {
    // TODO: Implement method
    const { distance_km, price } = shipment
    const query = `INSERT INTO Shipments (distance_km, price) VALUES ('${distance_km}', '${price}')`
    return await insertQuery(query) 
};

module.exports = {
    getShipments,
    addShipment
};