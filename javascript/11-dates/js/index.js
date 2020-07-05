let x = new Date()
document.write(typeof(x) + '<br>')
document.write(x + '<br>')

let y = new Date(1984,2,3)
document.write(y + '<br>')

document.write(y.getFullYear() + '<br>')//return year
document.write(y.getMonth() + '<br>')//return 0 - 11
document.write(y.getDate() + '<br>')//return day 1 - 31
document.write(y.getDay() + '<br>')//return
document.write(Date.now() + '<br>')

let date1 = new Date('01,01,2018')
document.write(date1 + '<br>')

let date2 = new Date('01.02.2018')
document.write(date2 + '<br>')
document.write((date2 - date1)/1000/60/60/24 + '<br>')


let myBirth = new Date('03,02,1984 08:10:10')
let currentDate = Date.now()
let diffrenceDate = currentDate - myBirth
document.write(diffrenceDate/1000/60/60/24/365 + '<br>')
