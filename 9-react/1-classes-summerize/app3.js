const arr = [5, 6, 1, 9, 12];

//...spread operator
const arr2 = [...arr];
arr[0] = 1;
//console.log(arr2);

class Auto {
    constructor (seatsNum, maxSpeed, color ){
        this.seats = seatsNum;
        this.speed = maxSpeed;
        this.color = color;
    }
   
    showDescription = function () {
        console.log(`this auto contains ${this.seats} seats and its max speed is ${this.speed}`);
    }
    static showGeneralDescription (){
        console.log('This car has wheels and you can drive it');
    }
}
const newAuto = new Auto(4, 280, 'blue')
const anotherAuto = new Auto(6, 260, 'black')

//add new property
newAuto.doors = 2;
// override a method in Auto class
Auto.prototype.newDescription = function(){

    console.log(`I am a new car with ${this.speed}km/h and I am ${this.color}`);
}
// add new method to Auto class
Auto.prototype.newDescription = function(){

    console.log('This is a new method on class car');
}
newAuto.newDescription()
anotherAuto.showDescription()

// add a new method to any string on Javascript
String.prototype.fbw5 = function(){
    console.log('hi we are fbw5')
}
String.prototype.replace = function(x, z){
    console.log('Replace is not working anymore')
}
"I am a string".fbw5()

"I am a string".replace('f', 'd')
//Auto.doors = 5
//console.log(anotherAuto.doors)
//console.log(newAuto);