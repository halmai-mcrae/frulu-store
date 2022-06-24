require('dotenv').config()

const productsData = require('./data/products')
const connectDB = require('./config/db')
const Product = require('./models/Product')

connectDB()

const importData = async () => {
  try {
    await Product.deleteMany({})
    console.log('Data Deleted')

    await Product.insertMany(productsData)
    console.log('Data Imported Successfully')

    process.exit()
  } catch (err) {
    console.error('Error with data import', err)
    process.exit(1)
  }
}

importData()
