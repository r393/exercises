const express = require('express')
const dataModule = require('../modules/mongodbDataModule')


const adminRouter = express.Router()
adminRouter.use((req, res, next) =>{
    if(req.session.user){
        next()
    }else {
        res.redirect('/login')
    }
})
adminRouter.get('/', (req, res) => {
    console.log(req.session.user)
    res.render('admin')
})
adminRouter.get('/addbook',(req, res) =>{
    res.render('addbook')
})
adminRouter.post('/addbook',(req, res) =>{

    // responses map
    // 1 book saved successfully
    // 2 data error
    //console.log(req.body);
    //console.log(Object.keys(req.files));
    if (req.files){

    const bookTitle = req.body.bookTitle
    const bookDescription = req.body.bookDescription
    const bookPdf = req.files.bookPdf

    if(bookTitle && bookDescription && bookPdf && Object.keys(req.files).length > 1){
        const imgs = []
        for (const key in req.files){
            if(req.files[key].mimetype != 'application/pdf'){
                imgs.push(req.files[key])
            }
        }
        dataModule.addBook(bookTitle, bookDescription, bookPdf, imgs,req.session.user._id).then(() => {
            res.json(1)
        }).catch(error => {
            if (error == 3){
                res.json(3)
            }
        })
    }else {
        res.json(2)
    }
}else{
    res.json(2)
}
    
})
module.exports = 
    adminRouter
