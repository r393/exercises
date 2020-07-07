for (let i = 0 ; i <= 10 ; i++){
    console.log(i)
}

let storage = ""

for (let i = 0 ; i <= 10 ; i++){
    //storage = storage + i+ ","
    storage = storage + i
    if(i != 10){
        storage = storage + ','
    }
}
console.log(storage)

for (let b = 0; b < 10; b+=2) {
   console.log(b)
    
}
 console.log("\\\\\\\\\\\\\\\\\\\\\\\\")

for (let a = 9; a < 50; a+=2) {
    console.log(a)
    
}

console.log("\\\\\\\\\\\\\\\\\\\\\\\\")
for (let a = 10; a < 50; a++) {
    if(a % 2 != 0)
    console.log(a)
}

console.log("\\\\\\\\\\\\\\\\\\\\\\\\")
//reverse loop
for (let a = 10; a >= 0; a-=2) {
    console.log(a)
}


console.log("\\\\\\\\\\\\\\\\\\\\\\\\")
let answer = 0
for (let c = 10; c <= 20 ; c++) {
    //answer += c
    answer = answer + c
}
console.log(answer)

console.log("\\\\\\\\\\\\\\\\\\\\\\\\")
document.write('hello World <br> and FBW5')

console.log("\\\\\\\\\\\\\\\\\\\\\\\\")

for (let a = 0; a <= 10; a++) {
  for(let i = 0; i <= 10; i++) {
//document.write(a+ "<br>") 
document.write(i+ "<br>")
}
document.write('again <br>')
}