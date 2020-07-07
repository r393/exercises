window.onload = ()=>{


    let div =  document.querySelector('#someDiv')
    // div.style.height = '50px'
    // div.style.backgroundColor ='red'
    // div.style.borderRadius ='10px 0 10px 0'
    div.classList.add('mystyle')
    div.classList.add('mystyle1')
    div.classList.remove('mystyle1')
    let father = div.parentElement
    father.style.border= '1px solid black'

    //let blink = true
    setInterval (() =>{
        // if(blink){
        //     div.classList.add('mystyle')
        //     blink = false
        // }else{
        //     div.classList.remove('mystyle')
        //     blink = true
        // }
    }, 1000)
}