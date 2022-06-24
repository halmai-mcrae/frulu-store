const express = require('express')
const router = express.Router()

const {
  getAllProducts,
  getProductById,
} = require('../controller/productControllers')

// GET ALL PRODUCTS FROM DB
// GET/API/PRODUCTS
// PUBLIC ROUTE
router.get('/', getAllProducts)

//GET PRODUCT BY ID FROM DB
//GET/API/PRODUCTS/:ID
//PUBLIC ROUTE
router.get('/:id', getProductById)

module.exports = router
