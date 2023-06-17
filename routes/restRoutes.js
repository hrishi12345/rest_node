const express = require('express');
const router = express.Router();
const Product = require('../models/menu');

// Route to render the rest.ejs file
router.get('/', function(req, res) {
  Product.fetchAll()
    .then(products => {
      res.render('rest', { products: products });
    })
    .catch(err => {
      console.log(err);
      res.status(500).send('Internal Server Error');
    });
});

router.post('/', function(req, res) {
  const dish = req.body.dish;
  const amount = req.body.amount;
  const table = req.body.Table;
  const product = new Product(dish, amount, table);

  product.save()
    .then(() => {
      console.log('Product saved successfully.');
      res.redirect('/');
    })
    .catch(error => {
      console.log('An error occurred while saving the product:', error);
      res.redirect('/');
    });
});

module.exports = router;
