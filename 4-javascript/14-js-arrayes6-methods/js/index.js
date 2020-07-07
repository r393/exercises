let fruits = ['Banana', 'Apple', 'watermelon']
// for(let i = 0 ; i < fruit.length ; i++){
//     document.write(fruits[i] + '<br>')
// }
//fruit.forEach(function(blaFruit){
   // document.write(blaFruit + '<br>')

    //fruits.forEach( blaFruit => {
        //document.write(blaFruit + '<br>')})

        let check = false
        fruits.forEach((blaFruit) => {
            if (blaFruit.indexOf('water') != -1){
                check = true
            }
        })
            document.write(check + '<br>')
//})

document.write('///////////////////////////////////////' + '<br>')



let arr = [1,5,5,6,1,1,5,7,8,-1]

function counter(arr, num){
    let input = 0
    arr.forEach(algo => {
    if(algo == num){
        input++
        }
    })
    return input
}
// function counterFor(arr, num){
//     let input = 0
//     for(i = 0 ; i < arr.length ; i++){
//         if(arr[i] == num){
//             input++
//         }
//     }
//     return input
// }
//document.write(counter(arr, 7))


let chr = ['Allen', 'rebecca', 'safa','neda','ahmad','hamoud']

function ch(txt, name){
    let storage = 0

    for(i = 0 ; i < txt.length ; i++){
        if(txt[i].indexOf(name.toLowerCase()) != -1 || txt[i].indexOf(name.toUpperCase()!= -1)) {
        storage++
        }
    }
    return storage
}
  document.write(ch(chr, 'a'))