// userRoutes.js
const express = require('express');
const UserController = require('../controllers/userController');
const authorizationMiddleware = require('../middleware/authorizationMiddleware');

const router = express.Router();

// Ruta para que el usuario envíe mensajes al chat
router.post('/sendMessage', authorizationMiddleware, UserController.sendMessage);

// Ruta para que el usuario agregue productos a su carrito
router.post('/addToCart', authorizationMiddleware, UserController.addToCart);

module.exports = router;
