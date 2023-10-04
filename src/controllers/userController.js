const { addUser, getUsers } = require('../services/userService');

const getUsersEndpoint = async(req, res) => {
    // TODO: Implement method
    try {
        const allUsers = await getUsers()
        return res.json(allUsers)
    } catch (error) {
        return res.status(400).send(error)
    }
};

const addUserEndpoint = async(req, res) => {
    // TODO: Implement method
    try {
        const { name } = req.body
        const user = {
            name: name 
        }
        await addUser(user)
        return res.status(201).json(user);
    } catch (error) {
        return res.status(400).send(error)
    }
};

module.exports = { 
    getUsersEndpoint, 
    addUserEndpoint 
};