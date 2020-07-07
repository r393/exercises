window.onload = () =>{
    let elements = document.getElementsByClassName('.card-head')
    console.log(elements.length);
    let h3 = document.getElementsByTagName('h3')
    console.log(h3);

    
    //query selector select 
    let elm = document.querySelector(".card-content")
    console.log(elm);


    let someVar = '.contact-container li'
    let elms = document.querySelectorAll('.social a')
    console.log(elms);
    let eelm = $('.social a')
    console.log(eelm)

    
}

function $(selectorText){
    return document.querySelectorAll(selectorText)
}