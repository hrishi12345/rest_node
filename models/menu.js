const db = require('../util/database');

module.exports = class Product {
  constructor(dish, amount, Table) {
    this.dish = dish;
    this.amount = amount;
    this.Table = Table;
  }
  save() {
    return db
      .execute(
        'INSERT INTO products (username, phoneNumber, email) VALUES (?, ?, ?)',
        [this.dish, this.amount, this.Table]
      )
      .then(result => {
        console.log('Product saved successfully.');
      })
      .catch(error => {
        console.log('An error occurred while saving the product:', error);
        throw error;
      });
    }
static fetchAll(){
    return db
    .execute('SELECT * FROM menu').then(([rows,fieldData])=>{
        console.log(rows)
        return rows;
    })
    .catch(error => {
        console.log('An error occurred while fetching products:', error);
        throw error;
      });
}
}