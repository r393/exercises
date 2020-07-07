let matrix = [
    [2, 4, 88, 7, 5, 6, 22, 4, 55, 11],
    [4, 22, 88, 7, 5, 6, 22, 4, 55, 11],
    [9, -33, 88, 7, 5, 6, 22, 4, 55, 85],
    [22, 445, 88, 7, 5, 6, 22, 4, 55, 45],
    [-5, 4 - 66, 89, 7, 5, 6, 22, 4, 55, 56],
    [32, 66, 88, 7, 5, 6, 22, 4, 55, 78],
    [99, -44, 88, 7, 5, 6, 22, 4, 55, 55],
    [12, 6, 56, 7, 5, 6, 22, 4, 55, 554]

]

let sumTotal = 0

matrix.forEach((arr) => {

    let total = 0

    for (i = 0; i < arr.length; i++) {

        total += arr[i]
    }

    sumTotal += total

    document.write(total + '<br>')

})

document.write(sumTotal + '<br>')




document.write('////////////////////////////////////////////////////////////////////////////////////' + '<br>')

//function printNewLine(arr1) {
  //  arr1.forEach(item => {
       // item.forEach(subItem => {
         //   document.write(subItem + '<br>')
        //})
    //})
//}
//printNewLine(matrix)

function findMax(arr) {
    let max = arr[0][0]
}
document.write('////////////////////////////////////////////////////////////////////////////////////' + '<br>')


let treeArray =
    ['rebecca',
        30,

        ['omar',
            5,
            ['Ali', 2, ['fbw5', 20, []]]], ['blabla', 99, []]]

function recursivePrint(arr) {
    arr.forEach(item => {
        if (typeof (item) == 'string') {
            document.write(item + '<br>')
        } else {
            if (typeof (item) == 'object') {
                recursivePrint(item)
            }
        }
    })
}
recursivePrint(treeArray)



document.write('////////////////////////////////////////////////////////////////////////////////////' + '<br>')


function reverseString(str){
    
    return str.split('').reverse().join('')
}
document.write(reverseString('rebecca')+"<br>")



//function reverseString(str) {
   //if (str === "")
     // return "";
    //else
      //return reverseString(str.substr(1)) + str.charAt(0);
 // }
 // reverseString("Rebecca");