function multiply(num){
    if(num == 1){
        return 1
    } else {
        return multiply(num - 1) * num
    }
}
console.log(multiply(5))







function rebec(num){
    if(num == 0){
        return 0
    } else {
        return rebec(num - 1) + "," + num

        //return num + "," + rebec(num - 1)
    }
}
console.log(rebec(5))

console.log("////////////////////////////////////")

let arrowTextAdd = num => {
    if (num == 0) {
        return num
    }else{
        return arrowTextAdd(num - 1) + ',' + num
    }
}
console.log(arrowTextAdd(3))

