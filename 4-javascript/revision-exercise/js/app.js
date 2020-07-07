// function wh(value, ccc){
//     setTimeout(function(){
//         ccc(value)
//     }, 1000)
// }
// wh("hello", rebecca)
// function rebecca(whatever){
//     console.log(whatever)
// }

// let obj = {
//     title: "t"
//     name: "Belal"
// }
// console.log(document.body)


//First Event is onload window
window.onload = function(){
    //anything you put here wil be executed after the all document is loaded
    this.printBody()
}
let x = 10;
function printBody(){
    console.log(document.log)
}
//the second important Event click :)
function clickEventHandlerMostafa(){
    alert("done")
    console.log("done again");
}
//the third important Event double click :)
function doubleClick(){
    console.log("Double click me")
}
//the fourth important Event mouse Over :)
function mouseOver(){
    console.log("mouse over")
}
function change(){
    console.log("changed")
}
function keypress(arg){
    console.log(arg)
}