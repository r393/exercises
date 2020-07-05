window.onload = function(){
    let ball = document.querySelector('#container>div')
    let left = 0
    let top = 0
    document .onkeydown = function(e){
        console.log(e)
        if(e.key == 'ArrowUp'){
            top -=10
        }
        if(e.key == 'ArrowDown'){
            top +=10
        }

        if(e.key == 'ArrowRight'){
            left +=10
        }
        if(e.key == 'ArrowLeft'){
            left -=10
        }
        ball.style.top = top + 'px'
        ball.style.left = left + 'px'
    }
}