let num1 = 2.4
let rounded = Math.round(num1)
console.log(rounded)
console.log(typeof(rounded))

console.log(Math.PI)
let num2 = Math.sqrt(9)
console.log(num2)

console.log(Math.random())
console.log(Math.floor(Math.random()*10))
console.log(Math.floor(Math.random()*2))



function some(){
let sum = Math.round(Math.random()*5)

switch (sum){
    case 0:
        return 'You can try again'
        break;

    case 1:
        return 'Always a next time'
        break;
    case 2:
        return 'keep trying'
        break;
    case 3:
        return 'Not too bad'
        break  
    case 4:
        return 'very good'
        break;
    case 5:
        return 'Exellent'
        break;
}
}

console.log(some())


