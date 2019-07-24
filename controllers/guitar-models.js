const express = require('express')

const guitarModelApi = require('../models/guitar-models.js')

const guitarModelRouter = express.Router({mergeParams: true})


// guitarModelRouter.get('/', (req, res) => {
//   guitarModelApi.getAllGuitarModels()
//     .then((models) => {
//       res.json(models)
//     })
//     .catch((err) => {
//       res.send(err)
//     })
// })

guitarModelRouter.get('/', (req, res) => {
  guitarModelApi.getModelsByBrandId(req.params.brandId)
    .then((models) => {
      res.json(models)
    })
    .catch((err) => {
      res.send(err)
    })
})

guitarModelRouter.get('/:modelId', (req, res) => {
  guitarModelApi.getGuitarModel(req.params.modelId)
    .then((model) => {
      res.json(model)
    })
    .catch((err) => {
      res.send(err)
    })
})

guitarModelRouter.post('/', (req, res) => {
  guitarModelApi.addGuitarModel(req.body)
    .then((newModel) => {
      res.json(newModel)
    })
    .catch((err) => {
      res.send(err)
    })
})

guitarModelRouter.put('/:modelId', (req, res) => {
  guitarModelApi.updateGuitarModel(req.params.modelId, req.body)
    .then((updatedModel) => {
      res.json(updatedModel)
    })
    .catch((err) => {
      res.send(err)
    })
})

guitarModelRouter.delete('/:modelId', (req, res) => {
  guitarModelApi.deleteGuitarModel(req.params.modelId)
    .then(() => {
      res.send('Model Deleted')
    })
    .catch((err) => {
      res.send(err)
    })
})


module.exports = {
  guitarModelRouter
}
