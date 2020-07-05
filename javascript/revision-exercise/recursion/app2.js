// let arr = [6,9,3,[10,50,6,3,9,4],60],5,4]
// let storage = 0;
// for(let i = 0; i< arr.length; i++){
//     if()
// }

// function calculate(arry){
//     let storage = 0;
//     for (let i = 0; i < arry.length; i++){
//         if (typeof arry[i] == "number"){
//             storage += arry[i]
//         }else {
//             if (typeof arry[i] == "object"){
//                 storage +=calculate(arry[i])
//             }
//         }
//     }
//     //the sum of all numbers in this array
//     return storage
// }
// console.log(calculate(arr))
// console.log(counter)

// calc the numbers from 0 to N using recursion
// n = 10: 0+1+2+3+4+5+6+7+8+9+10 = 55
let n = 10
function calc(n){
    let x = 0
     let y = 0
     if(n < 0){
         y += y
         x++
         calc(n)
     }
     return y
     
}

console.log(calc())