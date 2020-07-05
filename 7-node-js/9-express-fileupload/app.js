const express = require('express')
const fileUpload = require('express-fileupload')
const app = express()


app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024},
}))
app.set('view engine','ejs')
app.set('views',__dirname+ '/views')
app.use(express.static(__dirname + '/public'))

app.use(express.urlencoded({extended: false}))

app.get('/',(req,res) => {
    res.render('main')
})

app.post('/',(req,res)=>{
    console.log(req.body)
    console.log(req.files.photo)
    // move the uploaded file to public folder
    req.files.photo.mv(__dirname + '/public/uploadedfiles' + req.files.photo.name).then(() =>{
       // 
        res.redirect('/')
        //res.render('main)
    }).catch(error =>{
        console.log(error)
        res.send(error.message)
    })
    

    //res.render('main')
})

app.listen(3000,() => {
    console.log('App listening on port 3000')
})