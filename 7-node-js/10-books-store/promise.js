function getdata(){
    let x
    const somePromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            try{
                x = "I am date" + rr
                resolve(x)
            }catch (error){
                reject(error)
            }
        }, 200)
    })
    return somePromise
}

// let result = getData()
// console.log(result)
//getData().then(data => {
//    console.log(data)
//}).catch.log(error => {
//   console.log(error)
//})


// iffie function Self-Involking Function (it will be called it self)
// (async() =>{
//     let something = await getdata(
//         console.log(something)
//     )
// })()


async function normalFunction(){
    let somthing = await getdata()
    console.log(somthing);
    
}
normalFunction()