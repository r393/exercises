

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
// let x ='test
let car1 = new Auto(5, 200, 'red');
let car2 = new Auto(8, 240, 'blue');
// let car3 = {
//     seats: 2,
//     speed: 300,
//     color: 'white'
// }
car2.wheals = 6
//console.log(car3)
//car2.showDescription()
//car1.showDescription()

class User {
    constructor(fname, lname, email, address, role){
        this.fName = fname;
        this.lName = lname;
        this.email = email;
        this.address = address;
        this.role = role
    }
}

class UserRole {
    constructor(roleName, privileges) {
        this.roleName = roleName;
        this.privileges = privileges;
    }
    static getAdminRole() {
        return new UserRole('Admin', ['add teacher', 'delete teacher', 'edit teacher', 'add student', 'delete student', 'edit student'])
    }
    static getTeacherRole() {
        return new UserRole('Teacher', ['add student', 'delete student', 'edit student'])
    }
    static getStudentRole() {
        return new UserRole('Student', ['view course'])
    }
}
const Rebecca = new User('Rebecca', 'Arowosoki', 'rebecca@rebecca.com', UserRole.getStudentRole())

