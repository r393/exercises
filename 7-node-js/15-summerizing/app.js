const express = require('express')
const path = require('path')

const dbmongoose = require('./modules/dbmongoose')

const app = express()
 

//
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//public folder url
app.use(express.static(path.join(__dirname,'public')))

//set view engine
app.set('view engine','ejs')
app.set('views','views')


app.get('/', (req,res) => {
   // res.send('Hello World');
   // res.send('Hi again')
   res.render('register')

})
app.post('/register', (req, res) => {
    const name = req.body.name.trim()
    const email = req.body.email.trim()
    const password = req.body.password
    if (name && email && password){
        dbmongoose.register(name, email, password).then(() => {
            res.json(1)
        }).catch(error => {
            if(error == "exist") {
                res.json(3)
            } else{
                res.json(4)
            }
        })
    } else {
        res.json(2)
    }
    
    
})

app.listen(2000, () => {
    console.log('App listening on port 2000!')
})
