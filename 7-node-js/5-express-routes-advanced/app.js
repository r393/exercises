const express = require('express');
const homeRouter = require('./route/homeRouter')
const productRouter = require('./route/productRouter')
const app = express();

// app.get('/home',(req,res) =>{
//     res.send('blabala')
// })
app.use('/products', productRouter)
app.use('/home', homeRouter)
app.get('/', (req, res) => {
    res.send('Hello')
})

// app.get('/home',(req, res) => {
//     res.send('home')
// })
// app.get('/home/subhome',(req, res) => {
//     res.send('subhome')
// })

app.listen(3000, () =>{
    console.log('App listening on port 3000')
})