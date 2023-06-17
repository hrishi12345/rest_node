const Product = require('../models/menu');

exports.postAddProduct = (req, res, next) => {
  const dish = req.body.dish;
  const amount = req.body.amount;
  const Table = req.body.Table;
  const product = new Product(dish, amount, Table);

  product.save()
    .then(() => {
      console.log('Product saved successfully.');
      res.redirect('/');
    })
    .catch(error => {
      console.log('An error occurred while saving the product:', error);
      res.redirect('/');
    });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll()
    .then(products => {
      res.render('rest', {
        products: products,
        path: '/'
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).send('Internal Server Error');
    });
};
