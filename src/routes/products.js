const express = require('express');
const { getProductsPage } = require('../controllers/productController');

const router = express.Router();

router.get('/', getProductsPage);

module.exports = router;
