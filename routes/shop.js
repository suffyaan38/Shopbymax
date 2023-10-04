const path = require('path');

const express = require('express');

<<<<<<< HEAD
const productsController = require('../controllers/products');

const router = express.Router();

router.get('/', productsController.getProducts);
=======
const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

router.get('/cart', shopController.getCart);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);
>>>>>>> 47abf83 (Your commit message here)

module.exports = router;
