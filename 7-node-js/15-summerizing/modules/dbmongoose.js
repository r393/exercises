const mongoose = require('mongoose')
const passwordHash = require('password-hash')



const connectionString = 'mongodb+srv://register1:123abc@cluster0.lh6tv.mongodb.net/summary?retryWrites=true&w=majority'


const {Schema} = mongoose

//creating schema for users
const usersSchema = new Schema({
    name: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,
        unique: true

    },
    password: {
        type: String,
        required: true
    }

})
const Users = mongoose.model('users', usersSchema)
function dbConnect(){
    return new Promise((resolve, reject) => {
        if (mongoose.connection.readyState !== 1){
            resolve()
        }else {
            mongoose.connect(connectionString, {
                useCreateIndex: true,
                useNewUrlParser: true,
                useUnifiedTopology: true
            }).then(() => {
                resolve()
            }).catch(error => {
                reject(error)
            })
        }
    })
}
function register(name, email, password){
    return new Promise((resolve, reject) => {
        dbConnect().then(() => {
            //new user
            const newUser = new Users({
                name:name,
                email:email,
                password:passwordHash.generate(password)
            })
            //saving user in database
            newUser.save().then(result => {
                console.log(result)
                resolve()
            }).catch(error => {
                console.log(error.code)
                if(error.code === 11000){
                    reject('exist')
                } else {
                    reject(error)
                }
            })
        }).catch(error => {
            reject(error)
        })
    })
}
module.exports ={
    register
}