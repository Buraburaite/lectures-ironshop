const express = require('express');
const router  = express.Router();
const Product = require('../models/product.js');

router.get('/products', (req, res, next) => {
  Product.find((err, doc) => {
    if (err) {
      next(err);
      return;
    }

    res.render('products/index')
  });
});

// router.get('products/new', () => {});
// router.post('products', () => {});

module.exports = router;
