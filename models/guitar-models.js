const mongoose = require('./connection.js')

const GuitarModelSchema = new mongoose.Schema({
  model: String,
  price: Number,
  description: String,
  imagelink: String
})

const GuitarModelCollection = mongoose.model('Guitar Models', GuitarModelSchema)


function getAllGuitarModels() {
  return GuitarModelCollection.find()
}

function getGuitarModel(modelId) {
  return GuitarModelCollection.findById(modelId)
}

function addGuitarModel(newModel) {
  return GuitarModelCollection.create(newModel)
}

function updateGuitarModel(modelId, updatedModel) {
  return GuitarModelCollection.findByIdAndUpdate(modelId, updatedModel)
}

function deleteGuitarModel(modelId) {
  return GuitarModelCollection.findByIdAndDelete(modelId)
}

module.exports = {
  getAllGuitarModels,
  getGuitarModel,
  addGuitarModel,
  updateGuitarModel,
  deleteGuitarModel
}
