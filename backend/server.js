require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db')
const productRoutes = require('./routes/productRoutes')

connectDB()

const app = express()

app.use(express.json())

app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 8000

app.listen(PORT, () => console.log('Server is running on port ' + PORT))

//TO DO:SET UP PRODUCT MODEL -in progress-
//DATA IMPORT SCRIPT
//ROUTES AND CONTROLLERS
