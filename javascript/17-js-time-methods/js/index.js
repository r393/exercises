let x = 0

setTimeout(() =>{
document.write('Hi<br>')
x = 5
blacallBack(x)
}, 5000)

//console.log(10 / x)
//document.write('Hi2<br>')

function blacallBack(t) {
    console.log(10 / t)
}