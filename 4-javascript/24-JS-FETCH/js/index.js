let getpromise = fetch('/data.json')
getpromise.then(response =>{
    //console.log(response.json())
    if(response.status == 200){
         let jsonPromise = response.json()
    jsonPromise.then(data =>{
        console.log(data)
    }).catch(error =>{
        console.log(error)
    })
    } else{
        console.log('there is a problem with the link')
    }
}).catch(error =>{
    console.log(error)
})

async function getData(){
    let response = await fetch('/data.json')
    let data = await response.json()
    console.log(data)
}
//getData()


async function getJoke(){
    let response = await fetch('https://api.chucknorris.io/jokes/random')
    let data = await response.text()
    console.log(data)
}
getJoke()