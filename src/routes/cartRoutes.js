// cartRoutes.js
const express = require('express');
const CartController = require('../controllers/cartController');
const authorizationMiddleware = require('../middleware/authorizationMiddleware');

const router = express.Router();

router.post('/:cid/purchase', authorizationMiddleware, CartController.purchaseCart);

module.exports = router;
