function hopla(num){
   if(num != 0){
        return num
    }else {
       console.log(hopla(num - 1))
        
    }
    return num
}
hopla(5)

function add(num){
    if(num == 0){
        return 0
    } else {
        return add(num - 1) + num
    }
}
console.log(add(2))