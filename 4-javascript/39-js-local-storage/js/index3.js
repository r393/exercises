window.onload = function(){
    // get html element
    let nameInput = document.querySelector('#nameInput')
    let birthInput = document.querySelector('#birthInput')
    let aboutText = document.querySelector('#aboutText')

    //get data from local storage
    let meJson = localStorage.getItem('user')
   
    // check data if its not empty
    if(meJson != null){
        let meObj = this.JSON.parse(meJson)
        nameInput.value = meObj.name
        birthInput.value = meObj.birthdate
        aboutText.value = meObj.aboutme
    }

    document.querySelector('#saveFormBtn').addEventListener('click', function(){
        let me = {
            name: nameInput.value,
            birthdate: birthInput.value,
            aboutme: aboutText.value
        }
        localStorage.setItem('user',JSON.stringify(me))
    })
}