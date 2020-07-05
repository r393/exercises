let arr = [-5,6,0,6,12,3,3]
function removeDouble(array) {
    let result = []
    array.forEach(element => {
        if(result.indexOf(element) == -1){
            result.push(element)
        }
    });
    return result
}
console.log( removeDouble(arr))

document.write('////////////////////////// <br>')

let arr1 = [1,2,3,4]
let arr2 = [1,2,3,4]
let arr3 = arr1
//arr3[0] = 55
console.log(arr1)
if(arr1 == arr3){
    console.log('equal')
} else{
    console.log('not equal')
}

function checkEqual(ar1, ar2){
    if(arr1.length == arr2.length){
        for(let i = 0; i < ar1.length; i++){
            if (ar1[i] != ar2[i]){
                return false
            }
        }
        return true
    }
    return false
}
console.log(checkEqual([1,2,3,4],[1,2,3,4]))

function finShared(ar1, ar2){
    let result = []
    ar1.forEach(item => {
        if(ar2.indexOf(item) > -1 && result.indexOf(item) == -1){
            result.push(item)
        }
    })
    return result
}
console.log(finShared([1,2,3,4,5,1],[1,2,2]))