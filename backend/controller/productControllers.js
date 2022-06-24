const Product = require('../models/Product')

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({})

    res.json(products)
  } catch (err) {
    res.status(500).json({
      message: 'Error getting all products from server',
    })
  }
}

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)

    res.json(product)
  } catch (err) {
    res.status(500).json({
      message: 'Error getting this product from server',
    })
  }
}

module.exports = {
  getAllProducts,
  getProductById,
}
