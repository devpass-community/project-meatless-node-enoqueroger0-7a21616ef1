const { Router } = require('express');
const { addUserEndpoint, getUsersEndpoint } = require('../controllers/userController');

const userRouter = Router();

//TODO: Add User endpoints
userRouter.get('/', getUsersEndpoint)
userRouter.post('/', addUserEndpoint)
module.exports = { userRouter };