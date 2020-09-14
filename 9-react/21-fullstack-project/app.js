const express = require('express')
const fs = require('fs')

const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static(__dirname + '/public'))

const port = process.env.PORT || 3000

app.post('/register', (req, res) => {
    console.log(req.body);
    res.json(1)
});
app.use('/', (req, res, next) => {
    const html = fs.readFileSync(__dirname + '/index.html', 'utf-8')
    res.send((html));
});



app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});