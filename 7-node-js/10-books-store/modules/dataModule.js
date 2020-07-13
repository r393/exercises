const fs = require ('fs')
const passwordHash = require('password-hash')

function registerUser(email, password){
    //  read user.json and conver it to object
    return new Promise((resolve, reject) => {
        const readData = fs.readFileSync('./user.json')
        const data = JSON.parse(readData)//to change to object using parse

        //check user email if it exist or not using es6 find array method
        const existUser = data.users.find(user => user.email == email)
        if (existUser){
            reject('exist')
        } else{
            data.users.push({
                id: data.newId,
                email: email,
                password: passwordHash.generate(password)
            })
            // increase the newId property for data to be used for next registered user
            data.newId++
            // covert data to json and write it in users.json
            fs.writeFileSync('./user.json',JSON.stringify(data))
            resolve()
        }

    })
}

function addBook(bookTitle, bookDescription, bookPdf, bookImgs){
    // images files name pattern
    // booktitle no spaces_userid_image index.extension
    // book pdf name pattern
    // booktitle_userid.pdf
    // 1-start with save images file
    // 2-save pdf file
    // 3-save json file 

    return new Promise((resolve, reject) =>{
        //  check if book title does not exist for this user
       
        // read books.json
        const booksJson = fs.readFileSync('./books.json')
        // convert the read file to object
        const booksObj = JSON.parse(booksJson)

        const foundBook = booksObj.books.find(book => book.title == bookTitle && book.useid == 1)

        if(foundBook){
            reject(3)
        } else {
       
        
        // array will contain the url of images to be saved in the book.json
        const imgsArr = []
        bookImgs.forEach((img, idx) => {
            // get file extension
            let ext = img.name.substr(img.name.lastIndexOf('.'))
            
            //set the new image name
            let newName = bookTitle.trim().replace(/ /g,'_')+ '_' + 1 + '_' + idx + ext
            img.mv('./public/uploadedfiles/' + newName)
            imgsArr.push('/uploadedfiles/' + newName)
        })
        // set a new pdf file name
        let pdfName = bookTitle.trim().replace(/ /g, '_') + '_' + 1 + '.pdf'

        // move the pdf file with the new name to uploadedfiles folder
        bookPdf.mv('./public/uploadedfiles/' + pdfName)

        // set the pdf ur that goin to be saved in the json file
        let pdfNewUrl = '/uploadedfiles/' + pdfName

        //read books.json
        const booksjson = fs.readFileSync('./books.json')

        //convert the read file to object
        const booksObj = JSON.parse(booksjson)

        // add the new book to books.json
        booksObj.books.push({
            id: booksObj.newid,
            title: bookTitle.trim(),
            description: bookDescription,
            imgs: imgsArr,
            pdfUrl: pdfNewUrl,
            userid: 1
        })
        // increase the newid by one for the next book
        booksObj.newid++
        // save the book obj to book.json
        fs.writeFileSync('./books.json', JSON.stringify(booksObj))
        resolve()
        }
    })
}

function getAllBooks() {
    return new Promise((resolve, reject) => {
        // read file to json
        const booksJson = fs.readFileSync('./books.json')
        // convert json to object
        const booksObj = JSON.parse(booksJson)
        // export the object using resolve to be use on the hand
        resolve(booksObj.books)
    })
}

function getBook(id){
    return new Promise((resolve, reject) => {
        const booksJson = fs.readFileSync('./books.json')
        const booksObj = JSON.parse(booksJson)
        // find a book with id[id]
        const foundBook = booksObj.books.find(book => book.id == id)
        if(foundBook){
            resolve(foundBook)
        }else {
            reject(new Error('can not find a book with this id :', + id))
        }
    })
    
}

function checkUser(email, password){
    return new Promise((resolve, reject) =>{
        const userJson = fs.readFileSync('./user.json')
        const userObj = JSON.parse(userJson)
        const matchUser = userObj.users.find(user => user.email == email)
        if(matchUser){
            if(passwordHash.verify(password, matchUser.password)){
                resolve(matchUser)
            }else{
                reject(3)
            }
        }else{
            reject(3)
        }
    })
}
module.exports ={
    registerUser,
    addBook,
    getAllBooks,
    getBook,
    checkUser
}