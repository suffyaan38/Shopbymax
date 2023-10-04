const path = require('path');

const express = require('express');

<<<<<<< HEAD
const productsController = require('../controllers/products');
=======
const adminController = require('../controllers/admin');
>>>>>>> 47abf83 (Your commit message here)

const router = express.Router();

// /admin/add-product => GET
<<<<<<< HEAD
router.get('/add-product', productsController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct);
=======
router.get('/add-product', adminController.getAddProduct);

// /admin/products => GET
router.get('/products', adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);
>>>>>>> 47abf83 (Your commit message here)

module.exports = router;
