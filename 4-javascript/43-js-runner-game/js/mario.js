window.onload = function(){

    //get html elements
    let canvas = document.querySelector('#gameCanvas')
    let scoreSpn = document.querySelector('#scoreSpn')

    // draw a horizontal line
    let ctx = canvas.getContext('2d')
    ctx.moveTo(0, 100)
    ctx.lineTo(600,100)
    ctx.stroke()

    //draw a box on the right side  of the line 20*20
    //ctx.fillRect(580, 79, 20, 20,)// 1st box (canvs-width, canvs-height, box-width, box-height)

    //ctx.fillRect(0, 79, 20, 20,)
    // draw another box next to the 1st one
    // ctx.clearRect(580, 79, 20, 20)
    // ctx.fillRect(560, 79, 20, 20,) // 2nd box
    // ctx.clearRect(560, 79, 20, 20)
    // ctx.fillRect(540, 79, 20, 20,) // 3rd box
    // ctx.clearRect(540, 79, 20, 20)
    // ctx.fillRect(520, 79, 20, 20,) // 4th box
    // ctx.clearRect(520, 79, 20, 20)
    // ctx.fillRect(500, 79, 20, 20,) // 5th box
    // ctx.clearRect(500, 79, 20, 20)
    // ctx.fillRect(480, 79, 20, 20) // 6th box
    // ctx.clearRect(480, 79, 20, 20)
    // ctx.fillRect(460, 79, 20, 20) // 7th box

    let box = 580
    
    // let boxInterval = setInterval(function(){
    //     //draw a box on the rigth side of the line 20 * 20
    //     ctx.clearRect(box + 20, 79, 20, 20)
    //     ctx.fillRect(box, 79, 20, 20,)
    //     if(box == 0 ){
    //         box = 580

    //     }else{
    //         box = box - 20
    //     }

    // },100)


    let boxMoveCheck = true
    let boxMoveTime = 100
    
    function boxMove () {
        //draw a box on the rigth side of the line 20 * 20
            ctx.clearRect(box + 20, 79, 20, 20)
            ctx.fillRect(box, 79, 20, 20,)
            if(box == 0 ){
                box = 580
    
            }else{
                box = box - 20
            }
            if(boxMoveCheck){
                setTimeout(function () {
                    boxMove()
                },boxMoveTime)
            }
            
    
        
        boxMove()
    
    }
    
    // draw the image above the line in canvas starting from left
    let img = document.createElement('img')
    img.src = './imgs/player_big.png'
    img.onload = function(e){

        //to show full image
        //ctx.drawImage(img,8, 39, 480, 60)

        //10 character and the full width is 480 so each one width 

        // ctx.drawImage(img, 0, 0, 48, 60, 0, 39, 48, 60) //img to show 1st image
        // ctx.clearRect(0, 39, 48, 60)
        // ctx.drawImage(img, 48, 0, 48, 60, 0, 39, 48, 60)// img to show 2nd image
        // ctx.clearRect(0, 39, 48, 60)
        // ctx.drawImage(img, 96, 0, 48, 60, 0, 39, 48, 60)// img to show 3rd image
        // ctx.clearRect(0, 39, 48, 60)
        // ctx.drawImage(img, 144, 0, 48, 60, 0, 39, 48, 60)// img to show 4th image
        // ctx.clearRect(0, 39, 48, 60)
        // ctx.drawImage(img, 192, 0, 48, 60, 0, 39, 48, 60)// img to show 5th image
        // ctx.clearRect(0, 39, 48, 60)
        // ctx.drawImage(img, 336, 0, 48, 60, 0, 39, 48, 60)// img to show 2nd to the last image
        //postion of each character is(character index -1)*48

        let frameCounter = 0
        let scoreCounter = 0
        let characterInterval = setInterval(function () {
            ctx.clearRect(0, 0, 48, 90)
            //ctx.clearRect(0, 0, 48, 60)

            // or this for both ctx.clearRect(0, 0, 48, 99)
            if(status == 'running'){
                ctx.drawImage(img, frameCounter, 0, 48, 60, 0, 39, 48, 60)
            }else{
                ctx.drawImage(img, frameCounter, 0, 48, 60, 0, 0, 48, 60)
            }
            
            
            if(frameCounter == 336 ){
                frameCounter = 0
            }else{
                frameCounter = frameCounter + 48
            }
            if(box <= 39 && status == "running"){
                console.log("crash")
                // clearInterval(boxInterval)
                boxMoveCheck = false
                clearInterval(boxInterval)
                clearInterval(characterInterval)
                //draw text crash in canvas
                ctx.fillStyle = 'red'
                ctx.font = "45px Arial"
                ctx.fillText("CRASH!!!", 120, 50)
            }
            //add 1 for score everytime user jumps above the box
            if(box <= 39 && status == 'jumpping'){
                // code
                scoreCounter++
                scoreSpn.innerText = scoreCounter
                // reduce box movement time

                if(boxMoveTime > 50){
                    boxMoveTime -= 10
                }
                console.log(boxMoveTime)
                
            }

        
        
        },150)

    }
    // declare the status of the character(i.e image)
    let status = "running"

    window.onkeypress = function (e) {
        //console.log(e)
        if(e.key == " "){
            //console.log("jump")
            status = 'jumpping'

            setTimeout(function(){
                status = "running"
            },500)
        }
    }
}

// increase box speed every success jump
// student grade system get to grades from localStorage and save them in the students
    