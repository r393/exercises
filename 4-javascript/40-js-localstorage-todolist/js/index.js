window.onload = function (){
// get html elements
let todoInput = document.querySelector('#todoInput')
let addBtn = document.querySelector('#todoAddBtn')
let todoList = document.querySelector('#todoList')

//add click event listener to add btn
let todoArray = []

addBtn.addEventListener('click',function(e){
    let todoValue = todoInput.value
    
    if(todoValue.trim() != ''){

        let listItem = document.createElement('li')
        listItem.innerText =todoValue
        todoList.append(listItem)
        // clear the input the list item to the list
        

        // add th list to localstorage
        todoArray.push(todoValue)
        let todoArrayJson = JSON.stringify(todoArray)
        localStorage.setItem('todolist',todoArrayJson)
    
    } else{

        alert('todo value is empty, please enter a todo value')
        //clear the input after adding th list item to the list
    
    }
    todoInput.value = ''
})

// render todo list array frm localstorage
let jsonObj = localStorage.getItem('todolist')

//check if there is data with the key sudolist in the local storage
if(jsonObj != null){
    let convertedArr = this.JSON.parse(jsonObj)
    convertedArr.forEach(element => {
        todoArray.push(element)
        let listItem = document.createElement('li')
        listItem.innerText = element
        todoList.append(listItem)
    })
} 
}