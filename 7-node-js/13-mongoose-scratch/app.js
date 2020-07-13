const express = require('express')

const mongoose = require('mongoose')

const app = express()

//KWIEVWfspfmP65Fs
const connectionString = 'mongodb+srv://mongoose_users:KWIEVWfspfmP65Fs@cluster0.lh6tv.mongodb.net/mongoose?retryWrites=true&w=majority'

app.get('/', (req, res) => {
    res.send('Welcome to Mongoose')
})
app.listen(3000, () => {
    console.log('App listening on port 3000!');
})