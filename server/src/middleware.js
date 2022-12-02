/* eslint-disable */

const express = require('express')
const catalogueRoutes = require('./routes/catalogue')
const errorController = require('./controllers/error')

const app = express()
app.use(express.json())

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', process.env.FRONT_URL_AUTHORIZED)
    res.setHeader('Access-Control-Allow-Methods', 'GET')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    res.setHeader('Access-Control-Allow-Credentials', true)
    next()
})
app.use(catalogueRoutes)
app.use(errorController.get404)

app.listen(process.env.PORT, () => {
    console.log('server is running')
})
