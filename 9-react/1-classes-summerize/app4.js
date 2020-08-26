class Auto {
    // private property which can only be accessable inside the class
    #privateSeats
    constructor (seatsNum, maxSpeed, color ){
        this.#privateSeats = seatsNum;
        this.speed = maxSpeed;
        this.color = color;
    }
    set seats(value){
        console.log(('No,you can not change seats for the car'));
        //this.#privateSeats = value;
    }
    get seats(){
        return this.#privateSeats
    }

    showDescription = function () {
        console.log(`this auto contains ${this.seats} seats and its max speed is ${this.speed}`);
    }
    static showGeneralDescription (){
        console.log('This car has wheels and you can drive it');
    }
}
const newAuto = new Auto(4, 280, 'red')
// try to set a property
newAuto.seats = 6;
//try to get a property
console.log(newAuto.seats);

// get