const mongoose = require('./connection.js')

const CartSchema = new mongoose.Schema({
  item: Object
})

const CartCollection = mongoose.model('Cart', CartSchema)

function getCartItems() {
  return CartCollection.find()
}

function addCartItem(cartItem) {
  return CartCollection.create(cartItem)
}

function removeCartItem(cartItem) {
  return CartCollection.findByIdAndDelete(cartItem)
}

module.exports = {
  getCartItems,
  addCartItem,
  removeCartItem
}
