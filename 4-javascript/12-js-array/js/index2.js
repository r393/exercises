let arr = [2,4,1,9,5,7,6,3,2,7,1]
function show(arr1){
for (let x = 0; x < arr1.length; x++){
    document.write(arr1[x] + '<br>' )
}
}
// show(arr)
function findSmallest(arr1){
    let theSmallest = arr1[0]
    for (let i = 1; i < arr1.length; i++){
        if(arr1[i] < theSmallest){
            theSmallest = arr1[i]
        }
    }
    return theSmallest
}
document.write(findsmallest (arr)+ '<br>')

document.write('/////////////////////////////////////' + '<br>')

function avr(blaArr){
    let sum = 0
    for (let i = 0; i < blaArr.length; i++){
        sum += blaArr[i]
    }
    return sum/blaArr.length
}
document.write([100,60,50,80])