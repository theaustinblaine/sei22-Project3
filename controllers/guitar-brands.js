const express = require('express')

const guitarBrandApi = require('../models/guitar-brands.js')

const guitarBrandRouter = express.Router()


guitarBrandRouter.get('/', (req, res) => {
  guitarBrandApi.getAllGuitarBrands()
    .then((guitars) => {
      res.json(guitars)
    })
    .catch((err) => {
      res.send(err)
    })
})

guitarBrandRouter.get('/:brandId', (req, res) => {
  guitarBrandApi.getGuitarBrand(req.params.brandId)
    .then((guitar) => {
      res.json(guitar)
    })
    .catch((err) => {
      res.send(err)
    })
})

guitarBrandRouter.post('/', (req, res) => {
  guitarBrandApi.addNewGuitarBrand(req.body)
    .then((brand) => {
      res.json(brand)
    })
    .catch((err) => {
      res.send(err)
    })
})

guitarBrandRouter.put('/:brandId', (req, res) => {
  guitarBrandApi.updateGuitarBrand(req.params.brandId, req.body)
    .then((updatedBrand) => {
      res.json(updatedBrand)
    })
    .catch((err) => {
      res.send(err)
    })
})

guitarBrandRouter.delete('/:brandId', (req, res) => {
  guitarBrandApi.deleteGuitarBrand(req.params.brandId)
    .then(() => {
      res.send('Brand Deleted')
    })
    .catch((err) => {
      res.send(err)
    })
})


module.exports = {
  guitarBrandRouter
}
