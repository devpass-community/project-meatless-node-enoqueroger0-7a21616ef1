const { insertQuery, selectQuery } = require('../config/configDB');

const getUsers = async() => {
    // TODO: Implement method
    const query = `SELECT * FROM Users`
    return await selectQuery(query)
};

const addUser = async(user) => {
    // TODO: Implement method
    const { name } = user
    const query = `INSERT INTO Users (name) VALUES ('${name}')`
    return await insertQuery(query)
};

module.exports = {
    getUsers,
    addUser
};