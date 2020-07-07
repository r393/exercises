let i = 0

//while (i < 10){
    //document.write(i + '<br>')
    //console.log(i)
    //i++
//}

let blaInterval = setInterval(() => {
    console.log(i)
    i++
    if (i == 100){
       clearInterval(blaInterval)
    }
}, 100);