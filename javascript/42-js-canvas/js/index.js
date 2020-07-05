window.onload = function() {


    //get canvas element
    let canvas1 = document.querySelector('#canvas1')
    let context = canvas1.getContext("2d") 
    context.fillStyle = "red"

    // draw rectangle
    context.fillRect(50,50,50,100) //(position x, position y, width, height)

    // set canvas lines color
    context.strokeStyle = "blue"

    //draw empty rectangle
    context.strokeRect(150, 50, 50, 100)


    //draw line
    // set start point
    context.moveTo(100,100) // (x, y)

    //draw a line
    context.lineTo(20, 20)//(x, y)

    // set new start for the line
    context.moveTo(50,10)
    context.lineTo(100, 20)

    // draw curve
    context.moveTo(200, 200)
    context.quadraticCurveTo(100, 100, 120, 90)//(x curve, y curve, x)
    //x curve y curve for direction of the curve
    // x , y end point of the line
    //make all line visible

    //draw text
    context.font = "30px Georgia"
    context.fillText("Hello World", 200, 100)


    //make line visible
    context.stroke()
}