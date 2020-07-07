class Participant{
    constructor(lastname, firstname){
        this.firstName = firstname
        this.lastName = lastname
    }
    fullName(){
        return this.firstName + '-' + this.lastName
    }
}
let tim = new Participant( 'Breuel', 'Tim')
tim.tattoos = true
document.write( tim.fullName() + '<br>')

let safa = new Participant( 'Bouhlel', 'Safa')
document.write( safa.fullName() + '<br>')

let shirin= new Participant( 'Valizadeh', 'Shirin')
document.write( shirin.fullName() + '<br>')

let parArr= [tim, safa, shirin]
parArr.forEach(blaItem =>{
    document.write(blaItem.firstName + '<br>')
})

document.write('<br>')
//funtion to print first name of each element inside parArr
//first solution 'direct print'
function firstNamePrinter1(arr){
        arr.forEach(item =>{
            document.write(item.firstName + ' ' + item.tattoos + '<br>')
        })
}
firstNamePrinter1(parArr)

//second solution 'return a storage'

function firstNamePrinter2(arr){
    let storage = ''
    arr.forEach(item =>{
        storage+= item.firstName + '<br>'
    })
    return storage
}
document.write(firstNamePrinter2(parArr))

document.write('//////////////////////////////////////////////////////' +'<br>')
//write a funtion

function charFinder(arr ,chr) {
    let result = []
    arr.forEach(item => {
        if(item.lastName.indexOf(chr) > -1) {
            result.push(item)
        }
    })
    return result
}
console.log(charFinder(parArr, 'h'))


//solution with easy way
function easyWay(arr, chr){
    return arr.filter(item => item.lastName.indexOf(chr)> -1)
}
console.log( easyWay(parArr, 'B'))

// easyWay(parArr, 'h').forEach(blaItem => {
//      document.write( blaItem.lastName + '<br>')
// })

