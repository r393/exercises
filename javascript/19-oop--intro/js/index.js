// let x = {}
// document.write(typeof x + '<br>')

// x.bla = 1212
// x.blabla = 'Rebecca'
// x.mul = function(num){
//     return this.bla * num
// }
// //let y = Object.assign(x)
// let y ={...x} 
// y.bla = 1515
// document.write(y.mul(2) + '<br>')


document.write('//////////////////////////////////////////////////<br>')


let teacher = {}

teacher.name = 'Ahmad'
teacher.lastName = 'Osman'
teacher.fullname = function(){
    return this.name + '' + this.lastName
}

let participant = {...teacher}
participant.name = 'Rebecca'
participant.lastName = 'Arowosoki'
document.write(teacher.fullname() + '<br>')
document.write(participant.fullname() + '<br>')