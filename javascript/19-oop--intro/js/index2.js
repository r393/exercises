let person = {
    firstName: 'Ahmad',
    lastName : 'Osman',
    birthyear: 1986,
    job: 'Trainer',
    married: true,
    name : function(){
        return this.firstName + '' + this.lastName
    },
    age: function(){
        let dateNow = new Date()
        let newYear = dateNow.getFullYear()
        return newYear - this.birthyear
    },
     
    kids: ['omar', 'Ali'],
    wife:{
        firstname: 'Safaa',
        lastName: 'Tahhan',
        job: 'Architect',
        birthyear: NaN,
        name : function(){
            return this.firstName + '' + this.lastName
        }
    },
    //property array of object
    brothers:[{
        firstName: 'Mostafa',
        lastName: 'Othman'
        },{
        firstName: 'Shiar',
        lastName: 'Osman'
        }]
}

document.write(person.name() + '<br>')
document.write(person.kids[0] + '<br>')
document.write(person.wife.lastName + '<br>')
document.write(person.age() + '<br>')
document.write(person.brothers[1].lastName + '<br>')