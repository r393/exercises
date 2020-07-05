const express = require('express')

const fs = require('fs')
const { runInNewContext } = require('vm')



function adminBurgerRouter(myMeals){

    const adminRoute = express.Router()
    // build a middlewear to check the session for all routes in admin./admin/blabla...
    adminRoute.use((req, res, next) => {
        if(req.session.user){
            next()
        }else  {
            res.redirect('/login')
        } 
    })

    adminRoute.get('/',(req, res) => {
        console.log(req.session.user)
        // if(req.session.user){
        //     res.render('admin')
        // }else  {
        //     res.redirect('/login')
        // } 
        res.render('admin')
    })
        
        

    adminRoute.get('/addmeal',(req,res) =>{
        // const jsonText = fs.readFileSync(__dirname + '/meals.json')
        // const myMeals = JSON.parse(jsonText)
        res.render('adminAddMeals',{meals:myMeals})
    })
    
    adminRoute.get('/deletemeal',(req, res) => {
        res.render('adminDeleteMeals',{meals: myMeals})
    })
    adminRoute.post('/deletemeal',(req, res) => {
       //console.log(req.body.mealid);
       const idx = req.body.mealid

       try{
        fs.unlinkSync("./public" + myMeals[idx].imgUrl)
       }catch(error){
           console.log(error)
       }

       myMeals.splice(idx,1)
       fs.writeFileSync('./meals.json',JSON.stringify(myMeals))// how convert to string
       //console.log(myMeals);
       
       res.sendStatus(200)
       
    })
    adminRoute.get('/editmeal',(req, res) =>{
        res.render('adminEditMeals',{meals: myMeals})
    })
    adminRoute.post('/editmeal',(req, res) =>{
        console.log(req.body);
        console.log(req.files);
        
         myMeals[req.body.mealid].title = req.body.mealTitle
         myMeals[req.body.mealid].description = req.body.mealDescription
         myMeals[req.body.mealid].price = req.body.mealPrice
         

         
         if(req.files){
            console.log(req.files);
            const mealImg = req.files.imgFile
            // delete old image file
            try{
                fs.unlinkSync("./public"+ myMeals[req.body.mealid].imgUrl)
            }catch(error){
console.log(error)
            }
            
            //get image extension
            let ext = mealImg.name.substr(mealImg.name.lastIndexOf('.'))

            //move the new image to uploaded folder
            mealImg.mv('./public/uploadedfiles/'+ req.body.mealTitle.replace(/ /g,'_') + (req.body.mealid ) + ext).then(()=>{
                myMeals[req.body.mealid].imgUrl = "/uploadedfiles/"+ req.body.mealTitle.replace(/ /g, '_') + (req.body.mealid) + ext
                fs.writeFileSync('./meals.json',JSON.stringify(myMeals)) 
                //res.sendStatus(200) 
                res.json(myMeals[req.body.mealid].imgUrl)
            }).catch(error =>{

                res.sendStatus(500)
            });
        } else {
            fs.writeFileSync('./meals.json',JSON.stringify(myMeals))
            //res.sendStatus(200)
            res.json(myMeals[req.body.mealid].imgUrl)
        }
    })

    adminRoute.post('/addmeal',(req, res) => {
       const mealTitle = req.body.mealTitle
       const mealPrice = req.body.mealPrice
       const mealDescription = req.body.mealDescription
       const mealDetails = req.body.mealDetails

       
       



    // cheese_burger_1.jpeg
    if(mealTitle && mealPrice && mealDescription && req.files){
           //check if meal title exist
        const foundMarchMeal = myMeals.find(meal => meal.title == mealTitle)
        if(foundMarchMeal){
             res.send("This meal already exist")
        } else {
            const mealImg = req.files.mealimg
            //mealImg.name //blabla.jpeg
            // get image extension
            let ext = mealImg.name.substr(mealImg.name.lastIndexOf('.'))
            mealImg.mv('./public/uploadedfiles/' + mealTitle.replace(/ /g,'_')+ myMeals.length + ext).then(()=>{
       
            let obj = {
                title: mealTitle,
                description: mealDescription,
                imgUrl: '/uploadedfiles/' + mealTitle.replace(/ /g,'_')+ myMeals.length + ext,
                price: mealPrice,
                details: mealDetails
            }
            myMeals.push(obj)
            fs.writeFileSync('./meals.json',JSON.stringify(myMeals))
            //res.render('adminAddMeals',{meals:meals})
            res.redirect('/admin/addmeal')

        }).catch(error =>{
            res.send(error.message)
        })
    }   
} else {

        res.send("meal data is not complete")

    }
    
})
    adminRoute.post('/checkmealname',(req, res) =>{
        //console.log(req.body);
        const foundedMeal = myMeals.find(meal => meal.title == req.body.mealtitle)
        if (foundedMeal){
            res.json('exist')
        }else{
            res.json('notexisting')
        }
        
    })

    return adminRoute
}
module.exports = {
     adminBurgerRouter
}