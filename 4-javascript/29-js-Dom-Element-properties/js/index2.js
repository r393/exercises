window.onload = () => {
    let ball = document.querySelector('#ball')
    let down = true
    let counter = 0
    let increase = 0
    let interval = setInterval(() => {
        ball.style.top = counter + 'px'
        if (down) {
            counter++ 
        }else{
            counter--
        }
        if (counter == 180) {
            down = false
            increase += 5
        }
        if (counter == increase) {
            down = true
        }
        if(increase == 180){
            clearInterval(interval)
        }
        
    }, 1);
}