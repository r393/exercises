let arr = [2, -2, 6, 3, 4]


let newArr = []
    arr.forEach(num  => {
        newArr.push (num * 2)
    })

newArr.push('blabla')
newArr.push(2)
document.write(arr + '<br>')
document.write(newArr + '<br>')


//map will return a new array it will not change the original item
let newArr2 = arr.map(item =>{return item * 3})
document.write(newArr + '<br>')


//=====================================================


let blaArr = []
arr.forEach(item => {
    if (item > 0){
        blaArr.push(item)
    }
})

let blaArr1 = arr.filter(item => { return item > 0 && item < 4})
document.write(blaArr1 + '<br>')


