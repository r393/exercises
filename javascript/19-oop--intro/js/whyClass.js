let tim = {
    firstName: 'Tim',
    lastName:'Breuel',
    fullName: function() {
        return this.firstName + ' ' + this.lastName
    }
}

let safa = {
    firstName: 'Safa',
    lastName:'Bouhlel',
    fullName: function() {
        return this.firstName + ' ' + this.lastName
    }
}


let shirin = {
    firstName: 'Shirin',
    lastName:'Valizadah',
    fullName: function() {
        return this.firstName + ' ' + this.lastName
    }
}
document.write(tim.fullName() + '<br>')
document.write(safa.fullName() + '<br>')
document.write(shirin.fullName() + '<br>')
