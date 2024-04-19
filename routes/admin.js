const path = require('path');
const adminController = require('../controllers/admin');

const express = require('express');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

// /admin/product-list => GET
router.get('/product-list', adminController.getProducts);

module.exports = router;
