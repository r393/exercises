 let study2Hours = false

 let ahmadPromise = new Promise((resolve, reject)=>{
     if (study2Hours){
         resolve('you will be developers')
     } else {
         reject('I dont know, may be you will or may be not')
     }
 })
 ahmadPromise.then(message=>{
     console.log(message)
 }).catch(errorMessage =>{
     console.log(errorMessage)
 })


// let studying = true

// let rebeccaPromise = new Promise((resolve)=>{
//     if (studying){
//         resolve('Excellent out come')
//     }
// })
// rebeccaPromise.then(text=>{
//     console.log(text)
// })