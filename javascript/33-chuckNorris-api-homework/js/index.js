//https://api.chucknorris.io/jokes/random

window.onload = function(){
    getJoke()
    let jokBtn = document.querySelector('#jokBtn')
    jokBtn.addEventListener('click', function(){
        //call function when user click the page
        getJoke()
    })

}
// this function is going to call in first page load and in the click
//it use async await
async function getJokeaSync(){
    //getting the elements from html to be filled with data
    let jokImg = document.querySelector('#jokImg')
    let jokId = document.querySelector('#jokId')
    let jokPar = document.querySelector('#jokPar')

    let url = 'https://api.chucknorris.io/jokes/random'
    let data = await  data.json()
    console.log(jokObj)


    jokImg.src = jokObj.icon_url
    jokId.innerText = jokObj.id
    jokPar.innerText = jokObj.value
    
} else {
    jokPar.innerText = 'error with getting data'
}

//this function is going to call in first page load and in the click event for the button
//it use promise. Promise is more complicated but catches error
function getJoke(){
    //getting the elements from html to be filled with data
    let jokImg = document.querySelector('#jokImg')
    let jokId = document.querySelector('#jokId')
    let jokPar = document.querySelector('#jokPar')

    let url = 'https://api.chucknorris.io/jokes/random'
    fetch(url).then(data => {
        if(data.status == 200){
            data.json().then(jokObj =>{
                //console.log(jokObj)
                jokImg.src = jokObj.icon_url
                jokId.innerText = jokObj.id
                jokPar.innerText = jokObj.value


            }).catch(error =>{
                console.log(error)
            })
        }
        
    }).catch(error =>{
        console.log(error)
    })
}