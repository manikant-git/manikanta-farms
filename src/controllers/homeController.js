const products = require('../data/products');

const getHomePage = (req, res) => {
  const appName = process.env.APP_NAME || 'Manikanta Farms';

  const featuredProducts = products.slice(0, 6);
  const stats = [
    { label: 'Partner farms', value: '18+' },
    { label: 'Fresh deliveries each week', value: '120+' },
    { label: 'Average harvest-to-door time', value: '24 hrs' },
    { label: 'Naturally grown varieties', value: '40+' }
  ];

  res.render('index', {
    pageTitle: 'Fresh fruits and vegetables direct from farms',
    appName,
    company: {
      phone: process.env.COMPANY_PHONE || '+91 98765 43210',
      email: process.env.COMPANY_EMAIL || 'hello@manikantafarms.local',
      location: process.env.COMPANY_LOCATION || 'Hyderabad, Telangana'
    },
    hero: {
      eyebrow: 'Fresh from trusted farms',
      title: 'Seasonal fruits and vegetables with farm-first quality.',
      description:
        'Manikanta Farms brings carefully selected produce from local growers to households, cafés, and stores that care about freshness, consistency, and honest sourcing.'
    },
    stats,
    featuredProducts,
    benefits: [
      'Harvested in small batches and sorted by freshness windows.',
      'Transparent source farms and realistic seasonal availability.',
      'Ideal for home kitchens, stores, and restaurant prep teams.'
    ]
  });
};

module.exports = {
  getHomePage
};
