const mongoose = require('./connection.js')

const GuitarModelSchema = new mongoose.Schema({
  model: {
    type: String,
    required: true
  },
  brandId: mongoose.Schema.Types.ObjectId,
  price: Number,
  description: String,
  imageLink: String
})

const GuitarModelCollection = mongoose.model('Guitar Models', GuitarModelSchema)


function getAllGuitarModels() {
  return GuitarModelCollection.find()
}

function getModelsByBrandId(brandId) {
  return GuitarModelCollection.find({brandId})
}

function getGuitarModel(modelId) {
  return GuitarModelCollection.findById(modelId)
}

function addGuitarModel(newModel) {
  return GuitarModelCollection.create(newModel)
}

function updateGuitarModel(modelId, updatedModel) {
  return GuitarModelCollection.findByIdAndUpdate(modelId, updatedModel, {new: true})
}

function deleteGuitarModel(modelId) {
  return GuitarModelCollection.findByIdAndDelete(modelId)
}

module.exports = {
  getAllGuitarModels,
  getGuitarModel,
  addGuitarModel,
  updateGuitarModel,
  deleteGuitarModel,
  getModelsByBrandId
}
