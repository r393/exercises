function getData(){
    return new Promise((resolve, reject) =>{
        let xhr = new XMLHttpRequest()
        xhr.open('GET', './data.json')
        xhr.send()
        xhr.onload = function() {
            if(xhr.status == 200){
                resolve(xhr.response)
            } else {
                reject('Connection problem')
            }
        }
    })    
}


getData().then(theResponse => {
    console.log(theResponse)
}).catch(error=>{
    console.log(error)
})