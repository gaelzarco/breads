// DEPENDENCIES
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')

// CONFIGURATION
require ('dotenv').config()
const PORT = process.env.PORT
const app = express()

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})

// ROUTES
app.get('/', (req, res) => {
    res.render('home')
})

// BREADS
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

// BAKERS
const bakersController = require('./controllers/bakers_controllers.js')
app.use('/bakers', bakersController)

// CATCH-ALL
app.get('*', (req, res) => {
    res.render('Missing404')
})

// LISTEN
app.listen(PORT, () => {
    console.log('nomming at port', PORT)
})