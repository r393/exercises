//1st task
//write javascript function that will receive div id container as a parameter
// and create inside this div a text input

//2nd task
// change your previous function to add the input inside a div and this
// suppose to be in the container

//3rd task
//add a button after the previus input

//4th task
//add a div let it come after the las div which contains input and button


// 5th Task
//set class 'container' to the main div
//set class 'control-container' for the first child div

//6th task
//the 20 images should be shown only after clicking the search button

//7th task 
//delete old html content from div2 before adding the new 20 images


//8th task
// https://pixabay.com/api/?key=12000491-41fc68d8c365df909e022ceb6&q=lion
//log the data  that will be returned from the Api using fetch 



function appInit(containerId, apiKey){

    // get element by id containerId  the parameter
    let appContainer = document.getElementById(containerId)
    
    //check if this element exist
    if(appContainer){
        let div1 = document.createElement('div')
       
        // create input
        let inp1 = document.createElement('input')
        
        //add input inside div
        div1.append(inp1)

        
        //create colour list
        let colorList = document.createElement('select')
        //create list option
        let colorOpt1 = document.createElement('option')
        //set a value for this option
        colorOpt1.value = ""
        //set innerText for the option
        colorOpt1.innerText = "Choose color"
        //add the option inside the list element
        colorList.append(colorOpt1)
        //add colorList inside div1
        div1.append(colorList)
        //create colors option array
        let colorsArr = ["grayscale", "transparent", "red", "orange", "yellow", "green", "turquoise", "blue", "lilac", "pink", "white", "gray", "black", "brown"]
        colorsArr.forEach(element => {
            let colorOpt = document.createElement('option')
            colorOpt.value = element
            colorOpt.innerText = element
            colorList.append(colorOpt)
        })
        // create orientation list
        let orientationList = document.createElement('select')
        let orientationOpt1 = document.createElement('option')
        orientationOpt1.value = ""
        orientationOpt1.innerText = "Choose Orien"
        orientationList.append(orientationOpt1)
        let orientationArr = ["all", "horizontal", "vertical"]
        orientationArr.forEach(element =>{
            let orientationOpt = document.createElement('option')
            orientationOpt.value = element
            orientationOpt.innerText = element
            orientationList.append(orientationOpt)
        })
        div1.append(orientationList)

        // creat min width input

        let minWidthinp = document.createElement('input')
        minWidthinp.type = 'number'
        minWidthinp.min = '0'
        minWidthinp.placeholder = 'min Width' 
        //add min width input in div1
        div1.append(minWidthinp)


        // creat min Height input

        let minHeightinp = document.createElement('input')
        minHeightinp.type = 'number'
        minHeightinp.min = '0'
        minHeightinp.placeholder = 'min Height' 
        //add min width input in div1
        div1.append(minHeightinp)



         // create category list
         let categoryList = document.createElement('select')
         let categoryOpt1 = document.createElement('option')
         categoryOpt1.value = ""
         categoryOpt1.innerText = "Choose Category"
         categoryList.append(categoryOpt1)
         let categoryArr = ["backgrounds", "fashion", "nature", "science", "education", "feelings", "health", "people", "religion", "places", "animals", "industry", "computer", "food", "sports", "transportation", "travel", "buildings", "business", "music"]
         categoryArr.forEach(element =>{
             let categoryOpt = document.createElement('option')
             categoryOpt.value = element
             categoryOpt.innerText = element
             categoryList.append(categoryOpt)
         })
         div1.append(categoryList)

        // add class 'control-container' to div1
        div1.classList.add('controls-container')
        
        //create a button and add it to div1
        let btn1 = document.createElement('button')
        btn1.innerText = 'Search'
        div1.append(btn1)

        //create paggin buttons container
        let paggingDiv =  document.createElement('div')
        div1.append(paggingDiv)
        
        // add div inside the container
        appContainer.append(div1)
        let div2 = document.createElement('div')
        appContainer.append(div2)
        
        //add class images container to div2
        div2.classList.add('images-container')
        
        // first we add an event listener to the button
        btn1.addEventListener('click', function(){
            
            // fetching data... call getData function
            // now its working take a look at console
           
            
            // make div2 empty, old content...
            div2.innerHTML = ''
             getData(inp1.value, div2, paggingDiv, 1, colorList, orientationList,categoryList,minWidthinp,minHeightinp, apiKey)


             
            //then for loop will start fill ...
        //     for(let i =0 ; i<20; i++){
        //     let img = document.createElement('img')
        //     img.setAttribute("src", './img/dummy.png')
        //     div2.append(img)
        // }
        
        
        })
        appContainer.classList.add('container')
    }else{
        // container not exist
        console.log('Element with Id "' + containerId + '"could not be found')
    }
}
// call the function
// window.onload = function (){
//     appInit('container')
//     appInit('container1')
// }

async function getData(keyword, imagesContainer,paggingContainer,pageNumber,colorListElement,orientationListElement,categoryListElement,minWidthElement,minHeightElement,key) {
    //console .log (pageNumber)
    //get the selected alue from the list
    let selectedColor = colorListElement.options[colorListElement.selectedIndex].value
    //declare url  colors parameter
    let colorParameter = ''
    //check if there is color selected
    if(selectedColor){
        colorParameter = '&colors=' + selectedColor
    }
    //get the selected value from orientation list
    let selectedOrientation = orientationListElement.options[orientationListElement.selectedIndex].value
    // declare urlParameter
    let orientationParameter = ''
    // check if there is orientation selected
    if(selectedOrientation){
        orientationParameter ='&orientation=' + selectedOrientation
    }

    //get the selected value from category list
    let selectedCategory = categoryListElement.options[categoryListElement.selectedIndex].value
    // declare url Parameter
    let categoryParameter = ''
    // check if there is category selected
    if(selectedCategory){
        categoryParameter ='&category=' + selectedCategory
    }

    // declare min width url parameter
    let minWidthParameter = ''
    if(minWidthElement.value.trim()){
        minWidthParameter = '&min_width' + minWidthElement.value.trim()
    }

    // declare min Height url parameter
    let minHeightParameter = ''
    if(minHeightElement.value.trim()){
        minHeightParameter = '&min_Height' + minHeightElement.value.trim()
    }

    // console.log(selectedColor)
    //clear images container
    imagesContainer.innerHTML = ''
    //getting data from Api using fetch
    let response = await fetch('https://pixabay.com/api/?key=12000491-41fc68d8c365df909e022ceb6&q='+keyword + '&page=' + pageNumber)
    if(response.status == 200){
        let data = await response.json()
        // console.log(data.hits)
        let num = data.totalHits / 20
        //console.log(num)
        //round up number
        let btnNumbers = Math.ceil(num)
        console.log

        // for loop Done..
        //Try to read the code alone and think about it, when you have any question just write to me
        // okay
        
        paggingContainer.innerHTML = ''
        for (let i = 0; i < btnNumbers; i++) {
            let paggingBtn = document.createElement('button')
            paggingBtn.innerText = i+1
            paggingContainer.append(paggingBtn)

            //disable the button if its page show
            if(pageNumber == i+1){
                paggingBtn.disabled = true
            }

            //add event click for pagging button
            paggingBtn.addEventListener('click',function(){
                getData(keyword, imagesContainer,paggingContainer, i+1,colorListElement,orientationListElement,categoryListElement,minWidthElement,minHeightElement )
            })
            
        }
        

            data.hits.forEach(element => {
           // console.log(img.largeImageURL)
            
            let img = document.createElement('img')
            // set the url from the element preview url property
            img.src = element.largeImageURL

            //create link
            let imgLink = document.createElement('a')
            //set the href for the link
            imgLink.setAttribute('target', '_blank')
            //set the href for the link
            imgLink.setAttribute('href',element.largeImageURL)
            //add the imagge inside the link
            imgLink.append(img)
            //add the image link inside imagesContainer
            imagesContainer.append(imgLink)

        })
    }
    
    
}


let Fbw5Search = {
    key: '',
    go: function(elementId){
        if(this.key){
            appInit(elementId, this.key)
        }else {  
      
        console.log('you di not enter api key')
    } 
    }
}