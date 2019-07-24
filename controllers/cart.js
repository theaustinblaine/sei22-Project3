const express = require('express')

const cartApi = require('../models/cart.js')

const cartRouter = express.Router()


cartRouter.get('/', (req, res) => {
  cartApi.getCartItems()
    .then((cart) => {
      res.json(cart)
    })
    .then((err) => {
      res.send(err)
    })
})

cartRouter.post('/', (req, res) => {
  cartApi.addCartItem(req.body)
    .then((cartItem) => {
      res.json(cartItem)
    })
    .then((err) => {
      res.send(err)
    })
})

cartRouter.delete('/:cartItemId', (req, res) => {
  cartApi.removeCartItem(req.params.cartItemId)
    .then(() => {
      res.send('Item Removed')
    })
    .then((err) => {
      res.send(err)
    })
})


module.exports = {
  cartRouter
}
