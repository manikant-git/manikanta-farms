const products = require('../data/products');

const getAllProducts = () => products;

const getFeaturedProducts = () => products.filter((product) => product.isFeatured);

const getAvailableProducts = () => products.filter((product) => product.availableToday);

const getProductBySlug = (slug) =>
  products.find((product) => product.slug === slug);

const getTodayDeals = () =>
  products.filter((product) => product.todayPrice < product.basePrice);

module.exports = {
  getAllProducts,
  getFeaturedProducts,
  getAvailableProducts,
  getProductBySlug,
  getTodayDeals
};
