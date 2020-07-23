const passwordHash = require('password-hash')
//const {MongoClient, ObjectID} = require('mongodb')
const mySql = require('mysql')
//const dataModule = require('./dataModule')
//const { response } = require('express')
const fs = require('fs')


// get schema object
//const Schema = mongoose.Schema
//const {Schema} = mongoose

// const usersSchema = new Schema({
//     email: {
//         type: String,
//         unique: true,
//         required: true
//     },
//     password: {
//         type: String,
//         required: true
//     }
// })

// creat Books schema
// const bookSchema = new Schema({
//     title: {
//         type: String,
//         required: true
//     },
//     description: {
//         type: String
//     },
//     pdfUrl: {
//         type: String,
//         required: true
//     },
//     imgs: {
//         type: [String],
//         required: true,
//         min:1
//     },
//     userid: {
//         type: String,
//         required: true
//     }
// })

// creat users model
//const Users = mongoose.model('users', usersSchema)

// creat Books model
//const Books = mongoose.model('books', bookSchema)


//declare con
let con = null

function connect() {
    return new Promise((resolve, reject) => {
        if(con) {
            if (con.state === 'disconnected'){
                con.connect(error => {
                    if(error) {
                        reject(error)
                    } else {
                        resolve()
                    }
                })
            } else {
                resolve()
            }
        }else {
            con = mySql.createConnection({
                multipleStatements: true,
                host: 'localhost',
                port: 3306,
                user: 'ubuntu',
                password: '123456',
                database: 'fbw5_test'
            })
            con.connect(error => {
                if (error){
                    reject(error)
                } else {
                    resolve()
                }
            })
        }
    })
    
}
// here is a promise instead of a call back use in mysql
// no need to export runquery and connect because they are used internally
function runQuery(queryString){
    return new Promise((resolve, reject) => {
        connect().then(() => {
            con.query(queryString, (error, result, feilds) => {
                if(error){
                    reject(error)
                } else {
                    resolve(result)
                }
            })
        }).catch(error => {
            reject(error)
        })
    })
}
function registerUser (email, password) {
    return new Promise((resolve, reject) => {
        // "INSERT INTO users (email, password) VALUES('+email+','+passwordHash.generate(password)+')"
        runQuery(`INSERT INTO users(email, password) VALUES('${email}', '${passwordHash.generate(password)}')`).then(() => {
            // save the newUser in the database
            resolve()
        }).catch(error => {
            if(error.errno === 1062){
                reject('exist')
            } else {
                reject(error)
            }
        })
    })
}
function checkUser (email, password){
    return new Promise ((resolve, reject) => {
        // any result from SELECT query will be return as an array(empty) array or array with one element
            runQuery(`SELECT * FROM users WHERE email LIKE '${email}';`).then((result) => {
                console.log(result);
                if(result.length === 0){
                    reject(3)
                }else{
                    console.log()
                    if (passwordHash.verify(password, result[0].password)){
                        result[0]._id = result[0].id
                        resolve(result[0])
                    } else {
                        reject(error)
                    }
                }
            }).catch(error => {
                reject(error)
            })
        
    })
    
}
// make title and user id on books table uniqe together
// ALTER TABLE books ADD UNIQUE `book_title`(userid, title); 

// make imgurl and book id in imgs table unique together
//ALTER TABLE imgs ADD UNIQUE `img_url`(bookid, imgUrl); 

function addBook(bookTitle, bookDescription, bookPdf, bookImgs, userid){
    return new Promise((resolve, reject) =>{
        // set a new pdf file name
        let pdfName = bookTitle.trim().replace(/ /g, '_') + '_' + userid + '.pdf'

        // move the pdf file with the new namw to uploadedfiles folder
        bookPdf.mv('./public/uploadedfiles/' + pdfName)

        // set the pdf ur that goin to be saved in the json file
        let pdfNewUrl = '/uploadedfiles/' + pdfName
        runQuery(`INSERT INTO books (title, description, pdfUrl,userid) VALUES ('${bookTitle}','${bookDescription}','${pdfNewUrl}','${userid}')`).then(result => {
            let saveImgsQuery = ''
            bookImgs.forEach((img, idx)=> {
                // get file extension
                let ext = img.name.substr(img.name.lastIndexOf('.'))
                //set the new image name
                let newName = bookTitle.trim().replace(/ /g,'_')+ '_' + userid + '_' + idx + ext
                img.mv('./public/uploadedfiles/' + newName)
                const imgUrl = '/uploadedfiles/' + newName
                //imgsArr.push('/uploadedfiles/' + newName)
                saveImgsQuery += `INSERT INTO imgs (imgUrl, bookid) VALUES ('${imgUrl}', ${result.insertId});`
                // imgsArr.push('/uploadedfiles/' + newNqme)
            })
            runQuery(saveImgsQuery).then(() => {
                resolve()
            }).catch(error => {
                reject(error)
            })
        }).catch(error => {
            if (error.errno === 1062) {
                reject(3)
            }else {
                reject(error)
            }
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