const express = require ('express');
//const bodyParser = require('body-parser')
const app = express();


//set body parser middleware
app.use(express.urlencoded({extended: true}))

// route / root of the domain
app.get('/', (req, res) => {
    //res.send('Hello FBW5');
    res.sendFile(__dirname +'/home.html');

})


app.post('/',(req, res) => {
    console.log((req.body));
    if(req.body.username == 'user1' && req.body.password == '1234'){
        res.send("login successful")
    }else{
        res.send('login failed ')
    }
   // res.send('this is the post handler')
})

// route/about
app.get('/about',(req, res) =>{
    res.send(__dirname);
})

app.get('/contact',(req, res) =>{
    res.send('contact me');
})

app.get('/test',(req, res) =>{
    console.log(req);
    
    res.json('test');
})


app.listen(3000, () =>{
    console.log('App listening on port 3000!');
})