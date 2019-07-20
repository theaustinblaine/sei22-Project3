const mongoose = require('./connection.js')

const GuitarBrandSchema = new mongoose.Schema({
  brand: String
})

const GuitarBrandCollection = mongoose.model('Guitar Brands', GuitarBrandSchema)

function getAllGuitarBrands() {
  return GuitarBrandCollection.find()
}

function getGuitarBrand(brandId) {
  return GuitarBrandCollection.findById(brandId)
}

function addNewGuitarBrand(newBrand) {
  return GuitarBrandCollection.create(newBrand)
}

function updateGuitarBrand(brandId, updatedBrand) {
  return GuitarBrandCollection.findByIdAndUpdate(brandId, updatedBrand, {new: true})
}

function deleteGuitarBrand(brandId) {
  return GuitarBrandCollection.findByIdAndDelete(brandId)
}

module.exports = {
  getAllGuitarBrands,
  getGuitarBrand,
  addNewGuitarBrand,
  updateGuitarBrand,
  deleteGuitarBrand
}
