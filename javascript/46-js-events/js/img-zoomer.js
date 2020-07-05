window.onload = () => {

    let container = document.querySelector('#container')
    let img = document.querySelector('#container > img')

    // add event listener wheel to the container
    let zoom = 1
    container.addEventListener('mousewheel', function(e){
       // console.log(e)
       // check wheel direction

       if (e.deltaY > 0){
           // zoom in
           zoom += 0.1

       }else{

           //zoom out
           if(zoom > 0.2){
                zoom -= 0.1
           }
           

       }
       // img.style.transform = `scale(${zoom})`
       img.style.transform = 'scale ('+zoom+')'
    })

}