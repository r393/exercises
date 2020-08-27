const express = require('express')
const app = express()
const validator = require('validator')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use(express.static(__dirname + '/public'))

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get('/', (req, res) => {
    res.render('home')

})
app.post('/', (req, res) => {
    console.log(req.body);
    const {title, description, category} = req.body
    
    let errorMsgs = '';
    if (validator.isEmpty(title)){
        errorMsgs = 'Title should not be empty/n';
    }
    if (!validator.isLength(title,{min: 2, max: 50})) {
        errorMsgs += 'Title length should be between 2 and 50 chars\n'
    }
    if (validator.isEmpty(category)){
        errorMsgs +=  'You should choose a category\n';
    }
    if (validator.isEmpty(description)){
        errorMsgs +=  'Description should not be empty\n';
    }
    if (!validator.isLength(description, {min: 10, max: 1000})){
        errorMsgs += 'Description lenght should be between 10 and 1000 chars\n';
    }

    if(!errorMsgs){
        res.json('correct data')
    } else {
        res.json('incorrect data')
    }
})

app.listen(2500,() => {
    console.log('App listening on port 2500!');
})