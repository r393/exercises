function funWithDelay(num, cb){
    setTimeout(() =>{
        cb(num * 2) 

    }, 2000)
}
funWithDelay(5, blacallBack)

function blacallBack(par){
console.log(par)
}                           