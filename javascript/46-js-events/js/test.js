window.onload = () => {
    let input = document.querySelector('#test')
    let par = document.querySelector('#test > p')
    input.addEventListener('blur',function() {
        alert ('out input')
    })
    window.HashChange = function(){
        this.alert('please dont go')
    }
}