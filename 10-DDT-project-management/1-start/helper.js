const validator = (value, isNumber, notEmpty) => {
    if (isNumber && notEmpty) {
        if(value.trim().length === 0){
            return false
        }
        if(isNaN(value)){
            return false
        }
        return true
    }
    if(!isNumber && notEmpty){
        if(value.trim().lenght === 0){
            return false
        }
        return true
    }

}

const checkData = (userName, userAge) => {
    if(validator(userName, false, true) && validator(userAge, true, true)){
        return true
    }
    return false
    
}
const joiner = (name,age) => {
    return('user name is ' + name + ' ,and the age is ' + age )
}


module.exports = {
    checkData,
    validator,
    joiner
}

