window.onload = ()=>{
    let container = document.querySelector('#container')
    container.addEventListener('click',function(e){
        let ballDiv = document.createElement('div')
        ballDiv.classList.add('ball')
        //ballDiv.setAttribute('class','ball')
        console.log
        ballDiv.style.left = e.clientX -5 + 'px'
        ballDiv.style.top = e.clientY -5 + 'px'
        container.append(ballDiv)
        ballRoll(ballDiv,e.clientY -5,e.clientX -5, 500 ,10)
        //alert(e.clientx + ' ' + clienty)
        
    })
}
function ballRoll(ball,y, x, parentHeight,ballHeight){
        ball.style.left = x
        let counter = y
        let down = true
        setInterval(() => {
            ball.style.top = counter+ 'px' 
            if (down) {
                counter++ 
            }else{
                counter--
            }
            if (counter == parentHeight - ballHeight) {
                down = false
    
            }
            if (counter == 0) {
                 down = true
            }
            
        }, 1);
}
function realballRoll(ball,y, x, parentHeight,ballHeight){
    ball.style.left = x
    let counter = y
    let down = true
    maxHeight = y
    let inerv = setInterval(() => {
        ball.style.top = counter+ 'px' 
        if (down) {
            counter++ 
        }else{
            counter--
        }
        if (counter == parentHeight - ballHeight) {
            down = false
            maxHeight += 40
         
        }
        if (counter == maxHeight) {
             down = true
        }
        if (maxHeight == parentHeight - ballHeight){
            clearInterval(inerv)
        }
    }, 1);
}