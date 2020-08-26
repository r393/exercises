class Auto {
    constructor (seatsNum, maxSpeed, color ){
        this.seats = seatsNum;
        this.speed = maxSpeed;
        this.color = color;
    }
    wheals = 4;
    showDescription = function () {
        console.log(`this auto contains ${this.seats} seats and its max speed is ${this.speed}`);
    }
    static showGeneralDescription (){
        console.log('This car has wheels and you can drive it');
    }
}
class Truck extends Auto{
    constructor(seatsNum, maxSpeed, color, weight, height) {
        //calling the constructor of parent class
        super(seatsNum, maxSpeed, color)
        this.weight = weight;
        this.height = height;
    }
}

class MyString extends String {
    constructor(value){
        super(value);
        this.value = value;
    }
    log = function(){
        console.log(this.value);
    }
}
const someTruck = new Truck(2, 240, 'yellow', 7000, 3)
//console.log(someTruck);
// we cannot copy object to a new object like the following
const anotherTruck = {...someTruck}
someTruck.speed = 260;
//anotherTruck.showDescription();
console.log(anotherTruck.speed);
//const name = new MyString('Ahmad');
//console.log(name.substr(0, 2));
//name.log()
let x = 5;
let c = x;
x = 9;
//console.log(c);
