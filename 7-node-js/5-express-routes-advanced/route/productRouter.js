const express = require('express')

const productRouter = express.Router()


productRouter.get('/',(req, res) => {
    res.send('Our Products')
})
productRouter.get('/subproduct1',(req, res) => {
    res.send('welcome subproduct1')
})

productRouter.get('/subproduct2',(req, res) => {
    res.send('welcome subproduct2')
})


module.exports = productRouter