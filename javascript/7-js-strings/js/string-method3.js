let str = "Hello World"
console.log(str.slice(-11, -6))
//substring like slice but dose not accept
console.log(str.substring(0, 5))

console.log(str.substr(6, 3))

// replace only first found result
console.log(str.replace('o', 'x'))

console.log(str.replace(/o/g, 'x'))

let str2 = "I love life , I love programming , I love you"
console.log(str2.replace(/love/g, 'hate'))
console.log(str2.replace(/I /ig, 'you '))

console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str.concat(" ", str2))

let str3 = " rebecca@rebecca-arowosoki.com "
// trim will remove whitespaces from both sides
console.log(str3.trim())

console.log(str3.charAt(2))
console.log(str3.charCodeAt(0))



