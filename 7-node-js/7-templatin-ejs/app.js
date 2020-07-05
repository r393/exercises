const express = require('express')

const app = express()

//set view egine type
app.set('view engine','ejs')

// set the view folder
app.set('views', __dirname + '/views')

app.get('/',(req, res) => {
    //res.send('Hello')
    let arr = ["banana", "apple", "watermelon"]
    res.render('main',{title: 'main page', fruits: arr})
})

app.get('/contact',(req, res) => {
    //res.send('Hello')
    res.render('main',{title: 'contact us',fruits:[]})
})

app.listen(4000, () =>{
    console.log(('App listening on part 4000'));
    
})