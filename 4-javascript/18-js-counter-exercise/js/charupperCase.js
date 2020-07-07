function isupperCase(myString, str){
    return (myString.charAt(str) == myString.charAt(str).toupperCase)
}
function isLowerCase(myString, str){
    return (myString.charAt(str) == myString.charAt(str).toLowerCase)
}


function isLowerCase(str1){
    return str1 !== str1.toupperCase()
}
function isupperCase(str1){
    return str1 !== str1.toLowerCase()
}