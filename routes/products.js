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

router.get('/products/new', (req, res, next) => {
  res.render('products/newProduct');
});

router.post('/products', (req, res, next) => {

  const theProduct = new Product({
    name : req.body.name,
    price : req.body.price,
    imageUrl : req.body.imageUrl,
    description : req.body.description
  });

  theProduct.save((err, doc) => {
    if (err) {
      throw err;
    }
  });

  res.redirect('/products');
});

module.exports = router;
