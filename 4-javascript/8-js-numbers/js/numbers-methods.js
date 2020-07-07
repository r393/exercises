let num1 = 151
console.log(num1.toString().replace(/1/g, '8'))

let num2 = parseInt("123.4")
console.log(typeof(num2))
console.log(num2)

let num3 = parseFloat("123.4")
// parsInt convert to integer, eval convert to number
// paraFloat convert to decimal number
console.log(typeof(num3))
console.log(num3)


let num4 = 2.984
//toFixed will round the number and convert it
console.log(num4.toFixed(3))
