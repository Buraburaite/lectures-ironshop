const Router  = require('express').Router;
const Product = require('../models/product.js');

const router  = Router();

router.get('/products', (req, res, next) => {
  Product.find((err, products) => {
    if (err) {
      next(err);
      return;
    }

    res.render('products/index', {
      products : products
    });
  });
});

// router.get('products/new', () => {});
// router.post('products', () => {});

module.exports = router;
