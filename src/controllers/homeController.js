const products = require('../data/products');

const getHomePage = (req, res) => {
  const appName = process.env.APP_NAME || 'Manikanta Farms';

  res.render('index', {
    pageTitle: 'Fresh fruits and vegetables direct from trusted farms',
    appName,
    company: {
      phone: process.env.COMPANY_PHONE || '+91 98765 43210',
      email: process.env.COMPANY_EMAIL || 'hello@manikantafarms.com',
      location: process.env.COMPANY_LOCATION || 'Hyderabad, Telangana'
    },
    hero: {
      eyebrow: 'Fresh from trusted farms',
      title: 'Naturally fresh produce for homes, stores, and modern kitchens.',
      description:
        'Manikanta Farms delivers premium fruits and vegetables sourced directly from carefully selected growers, with a focus on freshness, taste, and dependable quality.'
    },
    trustPoints: [
      'Direct farm sourcing',
      'Premium handpicked produce',
      'Fresh daily supply',
      'Trusted by families and stores'
    ],
    products,
    features: [
      {
        title: 'Direct from growers',
        description:
          'We work closely with trusted farms to bring produce with better freshness and more consistent quality.'
      },
      {
        title: 'Quality you can trust',
        description:
          'Every batch is selected with attention to freshness, appearance, and everyday kitchen use.'
      },
      {
        title: 'Seasonal and honest',
        description:
          'We focus on real seasonal availability instead of overpromising products year-round.'
      }
    ],
    story: {
      title: 'A modern farm brand with local roots',
      description:
        'Manikanta Farms was built around one simple idea: fresh fruits and vegetables should feel trustworthy, beautifully presented, and easy to choose for every home and business.'
    },
    testimonials: [
      {
        name: 'Sravani R.',
        role: 'Home customer',
        quote:
          'The fruits feel fresher, cleaner, and more carefully selected than regular market purchases.'
      },
      {
        name: 'Rohit Foods',
        role: 'Retail buyer',
        quote:
          'Good consistency, clean packing, and reliable quality for our daily store requirements.'
      },
      {
        name: 'Chef Arun',
        role: 'Cloud kitchen partner',
        quote:
          'The vegetable quality is practical for kitchen use and the freshness is clearly noticeable.'
      }
    ]
  });
};

module.exports = {
  getHomePage
};
