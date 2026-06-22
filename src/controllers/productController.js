const productService = require('../services/productService');

const getProductsPage = (req, res) => {
  const products = productService.getAllProducts();

  res.render('products', {
    pageTitle: 'Fresh Products',
    appName: process.env.APP_NAME || 'Manikanta Farms',
    products
  });
};

module.exports = {
  getProductsPage
};
