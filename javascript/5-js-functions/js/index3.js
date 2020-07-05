"use strict"

function oddEven (num){

    if (num % 2 == 0){
    return true 
    }       else{
            return false
        }
}
//console.log(oddEven(13))

function checkNumber(num) {
    if(oddEven(num)){
        console.log('it is even Number')
    }else{
        console.log("It is odd Number")
    }
}
checkNumber(3)

