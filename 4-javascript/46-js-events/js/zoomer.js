window.onload = () => {

    const container = document.querySelector('#container')
    const par = document.querySelector('#container > p')
    
    //declare counter  for font size
    let fontSize = 16

    // assign wheel event to container
    container.onwheel = e => {
        console.log(e.deltaY)

        ///check the direction of wheeling
        //down e.deltaY negative
        //up to deltay negative

        if(e.deltaY > 0){
            fontSize++
        }else{
            if(fontSize > 0)
            fontSize--
        }
        console.log(fontSize)
        // set font size for par
        par.style.fontSize = fontSize + 'px'
    }
}