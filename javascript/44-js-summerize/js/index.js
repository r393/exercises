//task1
//what  will this code print
// var x = 5
// {
//     let d = 3
//     console.log(x)
// }
// console.log(d)
// // answer task1
// it will print 5 and error of 'd' is not defined


//task2
//what will this code print
// let x = 5
// {
//     var d = 3
//     console.log(x)
// }
// console.log(d)
// answer to task 2
// it will print 5 then 3



//task 3
//what will this code print
// const i = 6

// i = 2

// console.log(i)

//answer to task 3
//it will print 6 then an error because we declare using const
// so this varaible value is unchangable



//task 4
// what will this  code print
// const arr = [1,3,6]

// console.log{arr[2]}

// arr[2] = 8

// console.log{arr[2]}

// answer task to 4
// it will print 6 then 8


//task 5
//what will this code print
// let c = 3
// let y = 7
// y = 7

// console.log(c)
// console.log(y)
// answer to task 5
// it will print 3 then 7




//task 6
// what will this code print

// let obj = {
//     prop1: 2,
//     prop2: 'dummy',
//     prop3: true
// }
// obj.prop2 = 'hello'

// console.log(obj.prop1)
// console.log(obj.prop2)

// answer
// it will print 2 then hello



// tas 7
// what will this code print


// let obj1 = {
//     prop1: 2,
//     prop: 'dummy',
//     prop3: true
// }
// let obj2 = obj1
// obj1.prop1 = 6


// console.log(obj2.prop1)
// console.log(obj1.prop1)

// answer
// it will print 6 then 6



//task 8
// write the shortest code to print item in the following
//array which are greater than or equal 6

let arr = [2,6,7,9,2,6,-9,3,10,12,66,-6]

// first solution method
// let newArr = arr.filter(item => item >= 6)

//second solution method
console.log(arr.filter(item => item >= 6))





//task 9
// using last array 'arr' print a new array which contains the items
// from arr multiple with 2

// first solution method
// let newArr = arr.map(item => item * 2)
// console.log(newArr)

//second solution method
console.log(arr.map(item => item*2))



//task 10
// combine task 8 and 9

// let newArr =
console.log(arr.filter(item => item >= 6).map(item => item*2) )




