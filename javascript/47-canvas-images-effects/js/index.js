//task1
// drew the dices image inside the canvas

// task 2
// grayscale the image


window.onload = () => {
  let can = document.querySelector('#can')
  let grayscaleBtn = document.querySelector('#grayscaleBtn')
  let originalBtn = document.querySelector('#originalBtn')
  let invertBtn = document.querySelector('#invertBtn')
  let removeRedBtn = document.querySelector('#removeRedBtn')
  let greenToGrayBtn = document.querySelector('#greenToGrayBtn')
  let effectBtn1 = document.querySelector('#effectBtn')
  let effectBtn2 = document.querySelector('#effectBtn2')
  let brightnessSlide = document.querySelector('#brightnessSlide')
  
  //..create context instance from can
  const ctx = can.getContext('2d')

  //create html image
  const img = document.createElement('img')

  //set src to the image
  img.src = './imgs/dices.png'

  //create onload events for img to add it inside canvas
    img.onload = () => {

        // draw the image
         ctx.drawImage(img, 0, 0, 500, 500)
    }

      //add event click to grayscale btn
        grayscaleBtn.onclick = () => {

            //getting image data (in pixel)
            const imgData = ctx.getImageData(0, 0, 500, 500)
            // the second pixel data
            //console.log(ImageData[4]) red
            //console.log(ImageData[5]) green
            //console.log(ImageData[6])blue
            //console.log(ImageData[7]) Alpha (transparent)

            // imgData[0] = 255;
            // imgData[1] = 255;
            // imgData[2] = 255;

            for (let i = 0; i < imgData.data.length; i+=4) {
                let avg = (imgData.data[i] + imgData.data[i+1] + imgData.data[i+2])/3
                imgData.data[i] = avg;// red
                imgData.data[i+1] = avg;// green
                imgData.data[i+2] = avg;// blue

            }
            //clear drawing area
            ctx.clearRect(0, 0, 500, 500)
            //redrew the  changed data
            ctx.putImageData(imgData,0,0)

        }
        //add event click to original button
        originalBtn.onclick = () => {

            //clear photo first
            ctx.clearRect(0, 0, 500, 500)
            ctx.drawImage(img, 0, 0, 500, 500)
        }
        // add click event to invert button
        invertBtn.onclick = () => {
            // getimage data
            let imageData = ctx.getImageData(0, 0, 500, 500)
            // loop through image data array
            for (let i = 0; i < imageData.data.length; i+=4) {
                imageData.data[i] = 255 - imageData.data[i] //red
                imageData.data[i + 1] = 255 - imageData.data[i + 1] //green
                imageData.data[i + 2] = 255 - imageData.data[i + 2] //blue
                
            }
            // clear drawing area
            ctx.clearRect(0, 0, 500, 500)

            //draw the new image
            ctx.putImageData(imageData, 0, 0)
        }


        // add click event to remove red button
        removeRedBtn.onclick = () => {
            let imageData = ctx.getImageData(0, 0, 500, 500)

            //loop through data array
            for (let i = 0; i < imageData.data.length; i+=4) {
                if(imageData.data[i]> imageData.data[i+1] && imageData.data[i] > imageData.data[i+2]){
                    imageData.data[i+3] = 0
                }

            } 
            // clear old image
            ctx.clearRect(0, 0, 500, 500)

            // draw the new image
            ctx.putImageData(imageData, 0, 0)
        }


        //add click event to change green to gray color
        greenToGrayBtn.onclick = () => {
            let imageData = ctx.getImageData(0, 0, 500, 500)

            //loop through
            for (let i = 0; i < imageData.data.length; i+=4) {
                if(imageData.data[i+1]> imageData.data[i] && imageData.data[i+1] > imageData.data[i+2]){
                    let avg = (imageData.data[i]+ imageData.data[i+1] + imageData.data[i+2])/3
                    imageData.data[i] = avg
                    imageData.data[i+1] = avg
                    imageData.data[i+2] = avg
                    
                    //imageData.data[i+3] = 0
                }

                
            }
            // clear old image
            ctx.clearRect(0, 0, 500, 500)

            // draw the new image
            ctx.putImageData(imageData, 0, 0)
        }
        effectBtn1.onclick = () => {
            let effectImg1 = document.createElement('img')
            //set src for the created img
            effectImg1.src = './imgs/red-smoke.png'
            //add event load to the 
            effectImg1.onload = () => {
                ctx.drawImage(effectImg1, 0, 0, 500, 500 )
            } 
        }


        effectBtn2.onclick = () => {
            let effectImg2 = document.createElement('img')
            //set src for the created img
            effectImg2.src = './imgs/11.png'
            //add event load to the created image
            effectImg2.onload = () => {
                ctx.drawImage(effectImg2, 0, 0, 500, 500)
            } 
        }
        // add change event to brightnessslide
        brightnessSlide.onchange = () =>{
            let brightnessValue = brightnessSlide.value
            console.log(brightnessValue)
            // get image data
            let imageData = ctx.getImageData(0, 0, 500, 500)

            // loop through image data
            for (let i = 0; i < imageData.data.length; i+=4) {
                if(imageData.data[i] + parseInt(brightnessValue )> 255){
                    
                    imageData.data[i] = 255
                }else{
                    imageData.data[i] = imageData.data[i] + parseInt(brightnessValue)
                }
                if(imageData.data[i+1] + parseInt(brightnessValue )> 255){
                    
                    imageData.data[i+1] = 255
                }else{
                    imageData.data[i+1] = imageData.data[i+1] + parseInt(brightnessValue)
                }

                if(imageData.data[i+2] + parseInt(brightnessValue ) > 255){
                    
                    imageData.data[i+2] = 255
                }else{
                    imageData.data[i+2] = imageData.data[i+2] + parseInt(brightnessValue)
                }
                // imageData.data[i] = imageData.data[i] + parseInt(brightnessSlide)
                // imageData.data[i+1] = imageData.data[i+1] + parseInt(brightnessSlide)
                // imageData.data[i+2] = imageData.data[i+2] + parseInt(brightnessSlide)
            }
            ctx.clearRect(0, 0, 500, 500)
            ctx.putImageData(imageData, 0, 0)
            brightnessSlide.value = 0
        }
      
}
 // first loop