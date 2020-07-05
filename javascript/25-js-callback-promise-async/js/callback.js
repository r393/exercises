function sayHello(cb){
    setTimeout(()=>{
        console.log('Hello')
        cb()
    },1000)
}
sayHello(()=>{
    console.log('World')
})