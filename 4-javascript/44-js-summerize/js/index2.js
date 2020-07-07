// task1
// on save button click username and email values should be save inside
//the local storage using ONE key
window.onload = function (){
    //get HTML element
    const usernameInp = document.querySelector('#username')
    const emailInp = document.querySelector('#email')
    const btn1 = document.querySelector('#btn1')
    btn1.addEventListener ('click',function(e){
        // create  an object with properties from inputs value
        const personObj = {
            username: usernameInp.value,
            email: emailInp.value
        }
        // save the object inside the local storage as json string
        localStorage.setItem('blaPerson',JSON.stringify(personObj))
    }) 

    //task 2 
    // fill the  input with data inside the local storage IF EXIST
    // code here
    // get string data from local storage using the key 'blaPerson'
    const jsonData = localStorage.getItem('blaPerson')
    // check if data is not empty or exist
    if(jsonData){
        //convert the json text to object
        let obj = JSON.parse(jsonData)
        //fill inputs with data from the object
        usernameInp.value = obj.username
        emailInp.value = obj.email
    }
}