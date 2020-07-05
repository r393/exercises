const express = require('express')
//const MongoClient = require('mongodb').MongoClient
//const ObjectID = requir ('mongodb')
const {MongoClient,ObjectID} = require('mongodb')

const connectionString = 'mongodb+srv://reb:123456ab@cluster0.lh6tv.mongodb.net/test1?retryWrites=true&w=majority'
const app = express()

//to get data from users
app.use(express.urlencoded({extended: false}))
app.use(express.json())


app.set('view engine','ejs')
app.set('views','./views')

    app.get('/', (req, res) =>{
        res.send('welcome to mongodb')
    })


    //let mongoClient  
    app.get('/connect',(req, res) => {
        // open connection to mongodb
        MongoClient.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology:true}).then(client =>{
            //mongoClient = client
            console.log(client)
            res.send('connected')
        }).catch(error =>{
            console.log(error);
            res.send('couldnot connect')
        }) 
       
    })
    
    app.get('/adduser', (req, res) => {
        // connect node js to mongodb server or cluster
        MongoClient.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology:true}).then(client =>{
            //get the database
            const db = client.db('test1')
            // insert data to a collection
            db.collection('users').insertOne({
                email: 'rebecca@rebec.com',
                password: '1234567'
            }).then(response => {
                console.log(response)
                res.send(response)
                client.close()

            }).catch(error => {
                console.log(error)
                res.send(error)
                cleint.close()
            })
        }).catch(error => {
            res.send('can not connect')
        })
    })
    app.get('/adduserasync',(req, res) => {
        // alternative code from the above code
        // iffie (async ()=>{your code})()
        (async() =>{
            try {
            const client = await MongoClient.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology:true})
            const db = client.db('test1')
            const response = await db.collection('user').insertOne({
                email: 'bky@rebec.com',
                password: '12345'
            })
            client.close()
            res.send(response)
            }catch(error){
                res.send(error)
            }
        })()
    })
    app.get('/insertmany',(req, res) =>{
        (async() =>{
            try {
            const client = await MongoClient.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology:true})
            const db = client.db('test1')
            const response = await db.collection('users').insertMany([
                {
                email: 'bky@rebec.com',
                password: '12345'
                },
                {
                email: 'bky@rebec.com1',
                password: '12345'
                },
                {
                email: 'bky@rebec.com2',
                password: '12345'
                },
                {
                email: 'bky@rebec.com3',
                password: '12345'
                },
                
            ])
            client.close()
            res.send(response)
            }catch(error){
                res.send(error)
            }
        })()
    })
    app.get('/getusers', (req, res) =>{
        (async() =>{
            try {
            const client = await MongoClient.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology:true})
            const db = client.db('test1')
            const response = await db.collection('users').find().toArray()
                // console.log(response)

            client.close()
            res.send(response)
            }catch(error){
                res.send(error)
            }
        })()
    })
    app.get('/findone', (req, res) => {
        (async () => {
            try {
            const client = await  MongoClient.connect(connectionString,{useNewUrlParser: true, useUnifiedTopology: true})
            const db = client.db('test1')
            const response = await db.collection('users').findOne({_id: new ObjectID('5efc5eaa82f1c8175f8c96a8')})
            client.close()
            res.send(response)
            }catch(error) {
                res.send(error)
            }
        })()
    })
    app.get ('/updatemany', (req, res) => {
        (async () => {
            try{
                const client = await MongoClient.connect(connectionString,{useNewUrlParser: true, useUnifiedTopology: true})
                const db = client.db('test1')
                const response = await db.collection('users').updateMany({password: '1234567'},{
                    $set: {email: 'bky@reb.usd'}
                })
                client.close()
                    res.send(response)
                
            }catch(error){
                res.send(error)
            }
        })()
    })
    app.get ('/updateone', (req, res) => {
        (async () => {
            try{
                const client = await MongoClient.connect(connectionString,{useNewUrlParser: true, useUnifiedTopology: true})
                const db = client.db('test1')
                const response = await db.collection('users').updateOne({_id: new ObjectID('5efc5eaa82f1c8175f8c96a8')},{
                    $set: {email: 'rebec@jesus.email'}
                })
                client.close()
                    res.send(response)
                
            }catch(error){
                res.send(error)
            }
        })()
    })
    app.get ('/deletemany', (req, res) => {
        (async () => {
            try{
                const client = await MongoClient.connect(connectionString,{useNewUrlParser: true, useUnifiedTopology: true})
                const db = client.db('test1')
                const response = await db.collection('collectionData').deleteMany({password: '12345'})
                client.close()
                res.send(response)
                
            }catch(error){
                res.send(error)
            }
        })()
    })
    app.get ('/deleteone', (req, res) => {
        (async () => {
            try{
                const client = await MongoClient.connect(connectionString,{useNewUrlParser: true, useUnifiedTopology: true})
                const db = client.db('test1')
                const response = await db.collection('collectedData').deleteOne({_id: new ObjectID('5efc63a80e4de61b3c099d08')})
                client.close()
                res.send(response)
                
            }catch(error){
                res.send(error)
            }
        })()
    })
    app.get('/register', (req, res) =>{
        res.render('register')
    })
    app.post('/register',(req, res) =>{
        // 1 register success
        // 2 server error
        // 3 user already exist
        //console.log(req.body);
        const email = req.body.email.trim()
        const password = req.body.password
        
        if(email && password){
            (async () => {
                try{
                    const client = await MongoClient.connect(connectionString,{useNewUrlParser: true, useUnifiedTopology: true})
                    const db = client.db('test1')
                    const response = await db.collection('register').findOne({email: email})
                    
                    //console.log(response)

                    if(response){
                        client.close()
                        res.json(3)
                    } else {
                        const insertResponse = await db.collection('register').insertOne({
                            email: email,
                            password: password
                        })
                        //console.log(insertResponse)
                        client.close()
                        if(insertResponse.result.ok){
                            res.json(1)
                        } else {
                            res.json(2)
                        }
                        
                    }
                    
                }catch(error){
                    res.json(2)
                }
            })()
        }else {
            req.json(2)
        }
        
    })
    app.listen(3000, () => {
        console.log('App listening on port 3000')
    })
