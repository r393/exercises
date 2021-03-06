const passwordHash = require('password-hash')
//const {MongoClient, ObjectID} = require('mongodb')
const mongoose = require('mongoose')
//const dataModule = require('./dataModule')
//const { response } = require('express')
const fs = require('fs')
const { stringify } = require('querystring')
const connectionString = 'mongodb+srv://reb:123456ab@cluster0.lh6tv.mongodb.net/test1?retryWrites=true&w=majority'

// get schema object
const Schema = mongoose.Schema
//const {Schema} = mongoose

const usersSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

// creat Books schema
const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    pdfUrl: {
        type: String,
        required: true
    },
    imgs: {
        type: [String],
        required: true,
        min:1
    },
    userid: {
        type: String,
        required: true
    }
})

// creat users model
const Users = mongoose.model('users', usersSchema)

// creat Books model
const Books = mongoose.model('books', bookSchema)

function connect() {
    return new Promise((resolve, reject) => {
        if (mongoose.connection.readyState === 1){
            resolve()
        } else {
            mongoose.connect(connectionString, {
                useCreateIndex: true,
                useUnifiedTopology: true,
                useNewUrlParser: true
            }).then(() => {
                resolve()
            }).catch(error => {
                reject(error)
            })
        }
    })
}


function registerUser (email, password) {
    return new Promise((resolve, reject) => {
        connect().then(() => {
            // creat new user
            const newUser = new Users({
                email: email,
                password: passwordHash.generate(password)
            })
            // save the newUser in the database
            newUser.save().then(result => {
                console.log(result),
                resolve()
            }).catch(error => {
                console.log(error)
                if (error.code === 11000){
                    reject('exist')
                } else {
                    reject(error)
                }
                reject(error)
            })
        }).catch(error => {
            reject((error))
        })
    })
}
function checkUser (email, password){
    return new Promise ((resolve, reject) => {
        connect().then(() => {
            Users.findOne({email: email}).then(user => {
                if(user){
                    if(passwordHash.verify(password,user.password)) {
                        resolve(user)
                    } else {
                        reject(3)
                    }
                }else{
                    reject(3)
                }
            })
        }).catch(error => {
            reject(error)
        })
    })
    
}

function addBook(bookTitle, bookDescription, bookPdf, bookImgs, userid){
    return new Promise((resolve, reject) =>{
        connect().then(() => {
            Books.findOne({title: bookTitle, userid: userid}).then(findBook => {
                
                if(findBook){
                 
                 reject(3)
                    
                } else {
                    //create images array to be saved in database
                    const imgsArr = []
                    bookImgs.forEach((img, idx)=> {
                        // get file extension
                        let ext = img.name.substr(img.name.lastIndexOf('.'))
                        //set the new image name
                        let newName = bookTitle.trim().replace(/ /g,'_')+ '_' + userid + '_' + idx + ext
                        img.mv('./public/uploadedfiles/' + newName)
                        imgsArr.push('/uploadedfiles/' + newName)
                    })
                    // set a new pdf file name
                    let pdfName = bookTitle.trim().replace(/ /g, '_') + '_' + userid + '.pdf'

                    // move the pdf file with the new namw to uploadedfiles folder
                    bookPdf.mv('./public/uploadedfiles/' + pdfName)

                    // set the pdf ur that goin to be saved in the json file
                    let pdfNewUrl = '/uploadedfiles/' + pdfName

                    const newBook = new Books({
                        title: bookTitle,
                        description: bookDescription,
                        pdfUrl: pdfNewUrl,
                        imgs: imgsArr,
                        userid: userid

                    })
                    newBook.save().then(() => {
                        resolve()
                    }).catch(error => {
                        reject(error)
                    })
                }
            }).catch(error => {
                reject(error)
            })
        }).catch(error => {
            reject(error)
        })
        
    })
    
       
}

function getAllBooks(){
    return new Promise((resolve, reject) => {
        connect().then(() => {
            
            Books.find().then(books => {
                // add id property to each book instead of _id
                // this is how ituse in ejs
                books.forEach(book => {
                    book['id'] = book['_id']
                })
                resolve(books)
            }).catch(error => {
                reject(error)
            })
        }).catch(error => {
            reject(error)
        })
    })

}
function getBook(id){
    return new Promise((resolve, reject) => {
        connect().then(()=> {
            
            Books.findOne({_id:id}).then(book => {
                
                if(book){
                    book.id = book._id
                    resolve(book)
                }else{
                    reject(new Error('can not boot with this id :' + id))
                }
            }).catch(error => {
                reject(error)
            })
        }).catch(error => {
            reject(error)
        })
    })
}

function userBooks(userid){
    return new Promise((resolve, reject) => {
        connect().then(() => {
            
            Books.find({userid: userid}).then(books => {
                // add id property to each book instead of _id
                // this is how it use in ejs
                books.forEach(book => {
                    book['id'] = book['_id']
                })
                resolve(books)
            }).catch(error => {
                reject(error)
            })
        }).catch(error => {
            reject(error)
        })
    })

}

function updateBook(bookid,newBookTitle, oldImgsUrls, bookDescription, newPdfBook, newImgs,userid){
    return new Promise((resolve, reject) => {
        try{


        (async() => {
            let oldBookData = await getBook(bookid)
            const deletedImgs = []
            const keepImgs = []
            // get update version number
            // let updateNum = 1
            // if(oldBookData.update){
            //     updateNum = oldBookData.update +1
            // }
            //check which user wants to keep and which to deletd
            oldBookData.imgs.forEach(img => {
                if (oldImgsUrls.indexOf(img) >= 0){
                    keepImgs.push(img)
                } else {
                    deletedImgs.push(img)
                }
            })

            // save new images to file system and array to be saved to db
            const newImgsUrlsArr = []
            newImgs.forEach((img, idx) => {
                const imgExt = img.name.substr(img.name.lastIndexOf('.'))
                const newImgName = newBookTitle.trim().replace(/ /g,'_')+ '_' + userid + '_' + idx +'_'+ (oldBookData.__v + 1) + imgExt
                newImgsUrlsArr.push('/uploadedfiles/' + newImgName)
                img.mv('./public/uploadedfiles/' + newImgName)
            })
            // delete the deleted images files from the system
            deletedImgs.forEach(file => {
                //first check if file exist
                if(fs.existsSync('./public' + file)){
                    fs.unlinkSync('./public' + file)
                }
            })
            // check if user upload a new pdf file and move it to the same place of the old one so it will OVERWRITE it
            if (newPdfBook){
                newPdfBook.mv('./public' + oldBookData.pdfUrl)
            }
           
            
             await Books.updateOne({_id: bookid}, {
                
                    title: newBookTitle,
                    description: bookDescription,
                    imgs:[...keepImgs, ...newImgsUrlsArr],
                    //update: updateNum,
                    $inc: {__v: 1}
            })
            
            resolve()

        })()
    }catch(error) {
        reject(error)
    }

    })
}
function deleteBook(bookid, userid){
    return new Promise ((resolve, reject) => {
        getBooks(bookid).then(book => {
            // check if the book belong to the current login user
            if(book.userid === userid){
                // delete book images
                book.imgs.forEach(img => {
                    // check the img file, if exist then delete
                    if(fs.existsSync('./public'+ img)){
                        fs.unlinkSync('./public' + img)
                    }
                })
                // delete pdf file
                // check if pdf file exist then delete
                if(fs.existsSync('./public'+ book.pdfUrl)){
                    fs.unlinkSync('./public' + book.pdfUrl)
                }
                    //connect().then(() => {
                       
                        Books.deleteOne({_id:bookid}).then(() => {
                            
                            resolve()

                        }).catch(error => {
                            
                            reject(error)
                        })

                    //}).catch(error => {
                        //reject(error)
                    //})
                } else {
                reject(new Error('Hacker! not now! '))
            }

        }).catch(error => {
            reject(error)
        })
    })
}

module.exports = {
    
    registerUser,
    checkUser,
    addBook,
    getAllBooks,
    getBook,
    userBooks,
    updateBook,
    deleteBook
}