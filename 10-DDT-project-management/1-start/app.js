const{checkData, joiner} = require('./helper')

const initApp = () => {
    const addUserBtn = document.querySelector('#addBtn')
    addUserBtn.addEventListener('click', () => {
        addUser()
    })
}


const addUser = () => {
    const userNameElement = document.querySelector('#userNameInp')
    const userAgeElement = document.querySelector('#ageInp')
    const usersListElement = document.querySelector('#userList')

    if(checkData(userNameElement.value, userAgeElement.value)){
        const newelement = document.createElement('li')
    newelement.innerText = joiner( userNameElement.value, userAgeElement.value)
    usersListElement.append(newelement)
    }else {
        alert('data error')
    }
    
}



initApp()