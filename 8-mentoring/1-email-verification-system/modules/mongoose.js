const mongoose = require('mongoose')
const passwordHash = require('password-hash')
const emailSender  = require('./emailSaver')

const connectionString = 'mongodb+srv://register_mongoose:1234abc@cluster0.lh6tv.mongodb.net/register_mongoose?retryWrites=true&w=majority'

const {Schema }= mongoose


// creating schema for users
const usersSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        max: 50,
        min: 4
    },
    lastName: {
        type: String,
        required: true,
        max: 50,
        min: 4
    },
    password: {
        type: String,
        required: true,
        max: 100,
        min: 4

    },
    email: {
        type: String,
        unique: true,
        required: true,
        max: 100,
        min: 4
    },
    verified: {
        type: Boolean,
        required: true
    }
})


const Users = mongoose.model('users', usersSchema)
function connect(){
    return new Promise((resolve, reject) => {
        if(mongoose.connection.readyState === 1){
            resolve()
        }else {
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
function register (firstName, lastName, password,email){
    return new Promise ((resolve, reject) => {
        connect().then(() => {
            // creating  new users
            const newUser = new Users({
                firstName: firstName,
                lastName: lastName,
                password: passwordHash.generate(password),
                email: email,
                verified: false
            }) 
            //Saving the new user in the database
            newUser.save().then(() => {
                // email messaage :
                // welcome to or website. to verify your email click the following
                // http://localhost:3000/verify/[newUser.id]
                // https://rebecca-emailverification.herokuapp.com/
                let message = 'Welcome to our Website\n'
                message += 'to verify your email address please click in the following'
                message += 'https://rebecca-emailverification.herokuapp.com/' + newUser._id
                emailSender.emailSender(email, 'Verify Email',message).then(() => {
                    resolve()
                }).catch(error => {
                    reject(error)
                })
              
            }).catch(error => {
                reject(error)
            })
        }).catch(error => {
            reject(error)
        })
    })
}


module.exports = {
    register
}