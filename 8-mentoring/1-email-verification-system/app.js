const express = require('express')
const path = require('path')
const mongoose = require ('./modules/mongoose')
const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.set('view engine', 'ejs')
//app.set('views','./views')
app.set('views', path.join(__dirname,'views'))


//This link us to a page with 'Hello world'
app.get('/', (req,res) => {
    res.send('Hello world')
})
// This link us to the register page
app.get('/register', (req,res) => {
    res.render('register')
})

app.post('/register', (req, res) => {
    console.log(req.body)
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const password = req.body.password
    const email = req.body.email

    if(firstName.trim() && lastName.trim() && password && email.trim()){
        mongoose.register(firstName,lastName,password,email).then(() => {
            res.json(1)
        }).catch(error => {
            res.json(2)
        })
    } else {
        res.json(2)
    }
})

app.listen(4000, () => {
    console.log('App listening on port 4000!')
});


