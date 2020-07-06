const passwordHash = require('password-hash')
const {MongoClient, ObjectID} = require('mongodb')
const connectionString = 'mongodb+srv://reb:123456ab@cluster0.lh6tv.mongodb.net/test1?retryWrites=true&w=majority'

function connect() {
    return new Promise((resolve, reject) => {
        MongoClient.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}).then(client => {
            resolve(client)
        }).catch(error => {
            reject(error)
        })
    })
}
function registerUser(email, password){
    return new Promise((resolve, reject) => {
        connect().then(client => {
            const db = client.db('test1')
            db.collection('users').findOne({email: email}).then(user => {
                if (user){
                    client.close()
                    reject('exist')
                }else {
                    db.collection('users').insertOne({
                        email: email,
                        password: passwordHash.generate(password)
                    }).then(response => {
                        client.close()
                        if(response.result.ok){
                            resolve()
                        } else {
                            reject('can not insert')
                        }
                    }).catch(error => {
                        client.close()
                        reject(error)
                    })
                }
            }).catch(error => {
                client.close()
                reject(error)
            })
        }).catch(error => { 
            reject(error)
        })
    })
}

function checkUser (email, password){
    return new Promise((resolve, reject) => {
        connect().then(client => {
            const db = client.db('test1')
            db.collection('users').findOne({email: email}).then(user =>{
                client.close()
                if(user){
                    if(passwordHash.verify(password, user.password)){
                        resolve(user)
                    }else {
                        reject(3)
                    }
                    
                } else {
                    reject(3)
                }
            }).catch(error => {
                client.close()
                reject(error)
            })
        }).catch(error => {
            reject(error)
        })
    })
    
}

function addBook(bookTitle, bookDescription, bookPdf, bookImgs, userid){
    return new Promise((resolve, reject) =>{
        connect().then(client => {
            const db = client.db('test1')
            db.collection('books').findOne({title: bookTitle, userid: userid}).then(findBook => {
                
                if(findBook){
                 client.close()
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

                    db.collection('books').insertOne({
                        title: bookTitle,
                        description: bookDescription,
                        pdfUrl: pdfNewUrl,
                        imgs: imgsArr,
                        userid: userid
                    }).then(response => {
                        client.close()
                        if(response.result.ok){
                            resolve()
                        }else {
                            reject(new Error ('can not insert a book'))
                        }
                    }).catch(error => {
                        reject(error)
                    })
                }
            }).catch(error => {
                client.close()
                reject(error)
            })
        }).catch(error => {
            reject(error)
        })
    })
}

function getAllBooks(){
    return new Promise((resolve, reject) => {
        connect().then(client => {
            const db = client.db('test1')
            db.collection('books').find().toArray().then(books => {
                // add id property to each book instead of _id
                // this is how ituse in ejs
                books.forEach(book => {
                    book['id'] = book['_id']
                })
                client.close()
                resolve(books)
            }).catch(error => {
                client.close()
                reject(error)
            })
        }).catch(error => {
            reject(error)
        })
    })

}
function getBook(id){
    return new Promise((resolve, reject) => {
        connect().then(client => {
            const db = client.db('test1')
            db.collection('books').findOne({_id: new objectID(id)}).then(book => {
                client.close()
                if(book){
                    book.id = book._id
                    resolve(book)
                }else{
                    reject(new Error('can not boot with this id :' + id))
                }
            }).catch(error => {
                client.close()
                reject(error)
            })
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
    getBook
}