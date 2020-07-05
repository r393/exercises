window.onload = function(){
    let counterElement = document.querySelector('#counterElement')
    let storedCounter = localStorage.getItem('browseCount')
    if(storedCounter != null){
        // let counter = parseInt(storedCounter)
        // counterElement.innerText = counter
        // counter++
        // localStorage.setItem('browseCount', counter)
        //or with less lines
        counterElement.innerText = this.parseInt(storedCounter)
        localStorage.setItem('browseCount',parseInt(storedCounter)+1)
    }else{
        localStorage.setItem('browseCount',1)
        counterElement.innerText = 0
    }
}