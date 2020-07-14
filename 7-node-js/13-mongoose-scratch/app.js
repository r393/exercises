const express = require('express')

const mongoose = require('mongoose')


//KWIEVWfspfmP65Fs
const connectionString = 'mongodb+srv://mongoose_users:KWIEVWfspfmP65Fs@cluster0.lh6tv.mongodb.net/mongoose?retryWrites=true&w=majority'

const app = express()

// get schema object from mongoose


// cosnt schema = mongoose.Schema
const {Schema} = mongoose

// create users schema
const usersSchema = new Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    }
})

const Users = mongoose.model('users', usersSchema)

app.get('/', (req, res) => {
    res.send('Welcome to Mongoose')
})
app.get('/connect', (req, res) => {
    //check if mongoosemis already connected to database
    if(mongoose.connection.readyState === 1){
        res.send('Already connected')
    } else {
        mongoose.connect(connectionString, {
            useCreateIndex: true,
            userNewUrlParser: true
        }).then(() => {
            res.send('it is connected now')
        }).catch(error => {
            res.send(error)
        })
    }
})

function connect() {
    return new Promise((resolve, reject) => {
        if (mongoose.connection.readyState === 1){
            resolve()
        } else {
            mongoose.connect(connectionString, {
                useCreateIndex: true,
                useNewUrlParser: true
            }).then(() => {
                resolve()
            }).catch(error => {
                reject()
            })
        }
    })
}
app.get('/adduser',(req, res) =>{
    connect().then(() => {
        // create new user
        const newUser = new Users({
            fname: 'Rebecca',
            lname: 'Arowosoki',
            email: 'rebec-jes@bky.com',
            age: 36,
            active: true
        })
        newUser.save().then(result => {
            res.json(result)
        }).catch(error => {
            res.send(error.message)
        })
        

    }).catch(error => {
        res.send(error.message)
    })
})
app.get('/updateuser', (req, res) => {
    connect().then(() => {
        Users.updateOne({_id: '5f0c47d40ae63e6074fb45f7'}, {
            age: 38,
            // increase the version number in the database with one
            // to show many time this document has been updated
            $inc: {__v: 1}
        }).then(result => {
            res.json(result)
        }).catch(error => {
            res.send(error.message)
        })
       
    }).catch(error => {
        res.send(error.message)
    })
})
app.get('/updateusers',(req, res) => {
    connect().then(() => {
        Users.updateMany({lname: 'Arowosoki'}, {
            fname: 'Mrs. Rebecca',
            $inc: {__v: 1}
        }).then(result => {
            res.json(result)
        }).catch(error => {
            res.send(error.message)
        })
        
    })
})
app.get('/getuser', (req,res) => {
    connect().then(() => {
        Users.findOne({email: 'rebec-jes@bky.com'}).then(result => {
            res.json(result)
        }).catch(error => {
            res.send(error.message)
        })
    }).catch(error => {
        res.send(error.message)
    })
})
app.get('/getusers', (req, res) => {
    connect().then(() => {
        Users.find().then(result => {
            //return an Array
            res.json(result)
        }).catch(error => {
            res.send(error.message)
        })
    }).catch(error => {
        res.send(error.message)
    })
})
app.get('/deleteuser', (req, res) => {
    connect().then(() => {
        Users.deleteOne({email: 'rebec-jes@bky.com'}).then(result => {
            res.json(result)
        }).catch(error => {
            res.send(error.message)
        })

    }).catch(error => {
        res.send(error.message)
    })
})
app.listen(3000, () => {
    console.log('App listening on port 3000!');
})