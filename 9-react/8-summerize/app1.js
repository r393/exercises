class User {
    #privatePassword
    constructor(fname, lname, email, password){
        this.email = email;
        this.fName = fname;
        this.#privatePassword = password;
        this.lName = lname;
    }
    set password(value){
        console.log(('you can not change password from here'));
    }
    get password(){
        return this.#privatePassword
    }
    fullName(){
        return this.fName + ' ' + this.lName;
    }
    changePasssword(newPassword){
        this.#privatePassword = newPassword
    }
}
 let someUser = new User('Rebec', 'Arowosoki', 'reb@jes.com', '12345')
 let someUser1 = new User('Reb', 'Arowo', 'reb@arow.com', '1234567')

// adding new method to the class user which reflect on all 
// objects that have been created from this class
 User.prototype.checkUser = function (email, password) {
     if(email === this.email && password === this.password){
         return true
     } else {
         return false
     }
 }

 // override fullname method from class user and also it will reflect on all
 // object that have been created from this  class

 User.prototype.fullName = function (){
     return 'I am' + this.fName + ' ' + this.lName
 }

//static object
// let someUser = {
//     email: 'reb@jes.com',
//     fname: 'Rebec',
//     lName: 'Arowosoki',
//     password: '12345',
//     fullName: function(){
//         return this.fname + ' ' + this.lName
//     }
// }
//console.log(someUser.fullName());

class Employee extends User{
    constructor(lname, fname, email, password, officeNum, department){
        // we must call the constructure of the parent class using super
        super(fname, lname, email, password)
        this.officeNum = officeNum
        this.department = department
    }
    showDetails(){
        return `I am an employee and my name is ${this.fName}, I am working in ${this.department}`
    }
    static employeeDescription(){
        return 'this is a static method in Employee class'
    }
}
const someEmployee = new Employee('Arow', 'rebec', 'reb@reb.com','123456', 'fbw5', 'web-dev');
console.log(someEmployee.fullName());
console.log(someEmployee.showDetails());


// prototype user to add a new method called chanellPassword
// which will take one parameter  'newPassword' and it should change the password property for the user


// User.prototype.changePasssword = function (newPassword){
//     this.#privatePassword = newPassword
// }
someEmployee.changePasssword('122213')
someEmployee.password = '122213'
//console.log(someEmployee.password);
//console.log(User.description());
console.log(Employee.employeeDescription());
let user1 = new User('user1', 'luser1', 'eee@dd.cc', '123421')
let user2 = new User('user1', 'luser1', 'eee@dd.cc', '123421')


let user3 ={...user1}
user1.lname = 'bla'
if (user1 === user3){
    console.log(('equal'));
} else {
    console.log(('not equal'));


}
