class Rectangle{
    constructor(height, width){
        this.height = height
        this.width = width
        this.name = 'Rectangle'
    }
    //this is a method to print the object name property
    sayName(){
        console.log('Hi, I am a' + ' ' + this.name)
    }
    //this is a method to return tne object Area
    get myArea() {
        return this.height * this.width
    }
    set myArea(value){
        this._realArea = value
    }
    
}
class Square extends Rectangle{
    constructor(lenght){
        super(lenght, lenght)
        this.name = 'Square'
    }
}
let myHome = new Rectangle(11, 13)
myHome.sayName()
console.log(myHome.myArea)

let nedaHome = new Rectangle(7, 10)
nedaHome.sayName()
console.log(nedaHome.myArea)
document.write(JSON.stringify(nedaHome) + '<br>')

//change myHome dimension
myHome.height = 5
myHome.width = 10
console.log(myHome.myArea)
myHome.myArea = 100
console.log(myHome.myArea)
document.write(JSON.stringify(myHome) + '<br>')

let myOffice = new Square(3)
console.log(myOffice.myArea)
myOffice.myArea = 55
myOffice.sayName()