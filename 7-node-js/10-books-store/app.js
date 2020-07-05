const express = require('express')
const session = require('express-session')
const fileupload = require('express-fileupload')
const cookie = require('cookie-parser')
const fs = require('fs')


//include dataModule
const dataModule = require('./modules/mongodbDataModule')
const adminRouter = require('./routes/adminRoute')

const app = express()
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: false}))
app.use(express.json())
const sessionOptions = {
    secret: 'bookstore',
    resave: false,
    saveUninitialized: false,
    cookie: {} 
}
app.use(session(sessionOptions))
app.use(cookie())

app.use(fileupload({
    limits: { fileSize: 50 * 1024 * 1024 }
}))
// app.use(bla()) function in use that means it is a middleware
// use router after all middlewears so they will affect router request
app.use('/admin', adminRouter)

app.get('/', (req, res) => {
    res.render('main')
});

app.get('/register',(req, res) => {
    res.render('register')
})

app.post('/register', (req, res) => {
    //my post register handler
    // 2 data error
    // 1-user registered successfully
    // 3- user exist
    // 4- server-error
    
    console.log(req.body);
    const email = req.body.email.trim()
    const password = req.body.password
    const repassword = req.body.repassword 
    if(email && password && password == repassword){
        dataModule.registerUser(email, password).then(() => {
            res.json(1)
        }).catch(error => {
            console.log(error)
            if(error == 'exist'){
                res.json(3)
            }else {
                res.json(4)
            }
        })
    } else {
        res.json(2)
    }
       
})
app.get('/login',(req, res) => {
    if(req.session.user){
        res.redirect('/admin')
    } else {
        res.render('login')
    }
    
})
app.post('/login',(req, res) => {
    console.log(req.body)
    if(req.body.email && req.body.password){
        dataModule.checkUser(req.body.email.trim(), req.body.password).then(user =>{
            req.session.user = user
            res.json(1)
        }).catch(error => {
            if(error == 3){
                res.json(3)
            }else {
                res.json(4)
            }
        })
    }else{
        res.json(2)
    }
})

// shop route
app.get('/shop', (req, res) =>{
    dataModule.getAllBooks().then(blabooks => {
        res.render('shop', {books: blabooks})
    })
    
})
app.get('/book/:booktitle/:id', (req, res) =>{
    //res.send(req.params.id)
    dataModule.getBook(req.params.id).then(book => {
        let checkLogin = false
        if(req.session.user){
            checkLogin = true
        }
        res.render('book' ,{book, checkLogin})
    }).catch(error => {
        res.send('404,book could not be found')
    })
  
    
})


app.listen(3000, () => {
    console.log('App listening on port 3000!');
});