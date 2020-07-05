function norrisJoke(cb)
let xhr = new XMLHttpRequest();
xhr.open('GET','https://api.chucknorris.io/jokes/random')
xhr.send();
let result;
xhr.onload = function (){
    if(xhr.status == 200){
        result = JSON.parse(  xhr.response)
        cb(result.value)
    }
}
norrisJoke(callBackFun)
function callBackFun(toPrint){
    console.log()
}