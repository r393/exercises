let fruits = ['Apple', 'banana', 'watermelon','grape', 'orange','cherry'] 

let blaValue = fruits.find(fruit => fruit.indexOf('a') > -1)
document.write(blaValue + '<br>')
document.write(typeofblaValue + '<br>')


//find the first fruit inside the array which character 'a'is the third character
let blaValue = fruits.find(fruit => fruit.indexOf('a') === 2)
document.write(blaValue + '<br>')
document.write(typeofblaValue + '<br>')
 

document.write('//////////////////////////////////////////////////' + '<br>')
//(for of) wil interate over array items
for (let element of fruits ) {
    document.write(element + '<br>')
}

document.write('//////////////////////////////////////////////////' + '<br>')
//(for in) will interate through array indexes
for (let idx in fruits ) {
    document.write(idx + ';' + fruit[idx] +  '<br>')
}