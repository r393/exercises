let htmlObj = document.getElementsByTagName('h1');// => the first h1 Tag
console.log(htmlObj)
//Index is array[number],you can use forEach()
//for objects : obj[string] or obj.prop yo cannot use forEach()
Array.from(htmlObj).forEach(element=>{
    console.log(element)
})
// console.log( htmlObj[0])
// for (let i = 0; i < htmlObj.length; i++) {
//     console.log(htmlObj[i]);
    
// }
let obj = {
    t:"t",
    b:"b",
    ob: {
        ddd:5,
        st:[5, 20,60,"someString",{
            pr: true
        } ]
    }
}
console.log(obj[0])// => Not working
console.log(obj.ob.ddd)// => 5
console.log(obj.ob.st[3])
//what is the type of obj.ob.st[2]
console.log(obj.ob.st[4].pr)// => true

let firstH1 = document.getElementsByTagName('h1')[0]
console.log(firstH1)
firstH1.innerHTML
console.log(firstH1.innerHTML)
//firstH1.innerHTML = "a new value"// changing the content
firstH1.innerHTML = "<input type = 'text'>"// changing the content
console.log(firstH1.innerHTML)//new value
firstH1.innerHTML = "Rebecca"
let thirdH1 = document.getElementsByTagName('h1')[2]
console.log(thirdH1)
thirdH1.innerHTML
console.log(thirdH1.innerHTML)
thirdH1.innerHTML = "Rebecca"
