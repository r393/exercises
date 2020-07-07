window.onload = function(){
    let lastBrowseDate = localStorage.getItem('browseDate')
    if(lastBrowseDate){
        document.querySelector('#browseDateElement').innerText = lastBrowseDate
    }
}