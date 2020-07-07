// task 1
// write a code on btn1 click show an alert message'hello'
window.onload = function(){
    const btn1 = document.querySelector('#btn1')
    btn1.onclick = function (e) {
        alert('Hello')
    }



    //task2 create a red squae div inside container div
    // get bts
    const btn2 = document.querySelector('#btn2')
    const container = document.querySelector('#container') 
    
   
    btn2.onclick = function(e){
         // create div
    let newDiv = document.createElement('div')
    // add new div inside container element
    container.append(newDiv)
    // set div background color
    newDiv.style.backgroundColor = 'red'
    //set height of the new div
    newDiv.style.height = '100px'
    //set width for the new div
    newDiv.style.width = '100px'
    }
}