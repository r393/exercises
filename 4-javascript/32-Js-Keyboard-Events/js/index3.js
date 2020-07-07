window.onload = () => {

    let productInput = document.querySelector('.product div:nth-child(1) input')

    let priceInput = document.querySelector('.product div:nth-child(2) input')
    let quantityInput = document.querySelector('.product div:nth-child(3) input')
    let resultSpan = document.querySelector('.product div:nth-child(4) span')

    productInput.addEventListener('keyup', function(e) {
        if(e.which == 13){
            priceInput.focus()
        }
    })
    setEvent('keyup',priceInput,priceInput,quantityInput,resultSpan, 'price')
    // priceInput.addEventListener('keyup', function (e){
    //     let price = parseFloat(priceInput.value)
    //     let quantity = parseFloat(quantityInput.value)
    //     calculator(resultSpan, price, quantity)
    // })
    setEvent('change',priceInput,priceInput,quantityInput,resultSpan, 'price')
    // priceInput.addEventListener('change', function (e){
    //     let price = parseFloat(priceInput.value)
    //     let quantity = parseFloat(quantityInput.value)
    //     calculator(resultSpan, price, quantity)
    // })
    setEvent('keyup',quantityInput,priceInput,quantityInput,resultSpan, 'quantity')
    // quantityInput.addEventListener('keyup', function (e){
    //     let price = parseFloat(priceInput.value)
    //     let quantity = parseFloat(quantityInput.value)
    //     calculator(resultSpan, price, quantity)
    // })
    setEvent('change',quantityInput,priceInput,quantityInput,resultSpan, 'quantity')
    // quantityInput.addEventListener('change',function (e){
    //     let price = parseFloat(priceInput.value)
    //     let quantity = parseFloat(quantityInput.value)
    //     calculator(resultSpan, price, quantity)   
    // })

    let newProduct = document.querySelector('#newProduct')
      newProduct.addEventListener('click', function (e) {

        e.preventDefault()
        let productInmputsArr = document.querySelectorAll('.product div:nth-child(1) input')
        let check = true
        productInmputsArr.forEach(element => {
            if(element.value.trim() == ''){
                check = false
                element.focus()
            }
        })
        if(check){
        newProductCreator()
    }
          
      })
      document.querySelector('#invoiceGenerate').addEventListener('click', function(e){
        e.preventDefault()
        let  productsArr = document.querySelectorAll('.products .product')
        console.log(productsArr[0].children)

        let  printTable = document.querySelector('#printTable tbody')
        //remove all old rows from the table
        // for (let i = 1; i< printTable.lenght; i++){
        //     printTable.children[i].remove()
        // }
        //finish removing from the table

        //remove all old rows from the table body
        printTable.innerHTML = ''
        document.querySelector('#printSection .sumTotal').innerText =''
        for(let i = 1; i < productsArr.length; i++){
            if(productsArr[i].children[0].children[0].value.trim() == ''){
                productsArr[i].children[0].children[0].focus()
                return
            }
        }
        for (let i = 1; i < productsArr.lenght; i++){
            let newRow = document.createElement('tr')

            let productTd = document.createElement('td')
            productTd.innerText = productsArr[i].children[0].children[0].value
            newRow.append(productTd)

            let priceTd = document.createElement('td')
            priceTd.innerText = productsArr[i].children[1].children[0].value + 'EUR'
            newRow.append(priceTd)

            let quantityTd = document.createElement('td')
            quantityTd.innerText = productsArr[i].children[2].children[0].value
            newRow.append(quantityTd)

            let totalTd = document.createElement('td')
            totalTd.innerText = productsArr[i].children[3].children[0].innerText
            newRow.append(totalTd)
            
            printTable.append(newRow)

        }
        let sumTotal1 = document.querySelector('.sumTotal')
        document.querySelector('#printSection.sumTotal').innerText = sumTotal1.innerText


      })
      
}
// function calculator(resultElement,price, quantity){
//     resultElement.innerText = price * quantity
// }
function setEvent(eventName, triggerElement, priceElement, quantityElement, resultElement, elementType){
    triggerElement.addEventListener(eventName, function (e){
    let price = parseFloat(priceElement.value)
    let quantity = parseFloat(quantityElement.value)
    resultElement.innerText = (price * quantity) + ' EUR'

        //querySelect return only the first found element
        //querySelectAll return all element that match the selector
    let spansArr = document.querySelectorAll('.product>div>span')
    let storage = 0
    spansArr.forEach(element =>{
        let innerValue = element.innerText.replace(' EUR', '')
        let price = parseFloat(innerValue)
        storage += price
    })
    let sumTotalElement = document.querySelector('.sumTotal')
    sumTotalElement.innerText = storage + 'Euro'

    if(elementType == 'price' && eventName == 'keyup'){
        if(e.which == 13){
            quantityElement.focus()
        }
    }
    if(elementType == 'quantity' && eventName == 'keyup'){
        if(e.which == 13){
            //quantityElement.focus()
            let productInput = priceElement.parentElement.parentElement.children[0].children[0]
            //alert(productInput.value.trim())
            let currentProduct = priceElement.parentElement.parentElement
            let products = currentProduct.parentElement
            let childrenArr = Array.from(products.children)// convert collection to array so we can use indexOf
             console.log(childrenArr.indexOf(currentProduct))
             console.log(childrenArr.length)
            let ProductsLength = childrenArr.length
            let currentProductIndex = childrenArr.indexOf(currentProduct)
            if(productInput.value.trim() != ''){
                if(ProductsLength-1 == currentProductIndex){
                    newProductCreator()
                } else{
                    childrenArr[currentProductIndex + 1].children[0].children[0].focus()
                }
            }
        }
    }


    })
}
function newProductCreator(){
          let productDiv = document.createElement('div')
          productDiv.classList.add('product')

          let firstDiv = document.createElement('div')
          let newproductInput = document.createElement('input')
          newproductInput.type = 'text'
          firstDiv.append(newproductInput)
          productDiv.append(firstDiv)

          let secondDiv = document.createElement('div')
          let newPriceInput = document.createElement('input')
          newPriceInput.type = 'number'
          newPriceInput.setAttribute('min', '0')
          newPriceInput.value = '0'
          secondDiv.append(newPriceInput)
          productDiv.append(secondDiv)

          let thirdDiv = document.createElement('div')
          let newquantityInput = document.createElement('input')
          newquantityInput.type = 'number'
          newquantityInput.setAttribute('min', '0')
          newquantityInput.value = '0'
          thirdDiv.append(newquantityInput)
          productDiv.append(thirdDiv)

          let fourthDiv = document.createElement('div')
          let newResultSpan = document.createElement('span')
          newResultSpan.innerText = '0 EUR'
          fourthDiv.append(newResultSpan)
          productDiv.append(fourthDiv)

          let productsDiv = document.querySelector('.products')
          productsDiv.append(productDiv)

          setEvent('keyup',newPriceInput,newPriceInput, newquantityInput, newResultSpan, 'price')
          setEvent('change',newPriceInput,newPriceInput, newquantityInput, newResultSpan, 'price')
          setEvent('keyup',newquantityInput,newPriceInput, newquantityInput, newResultSpan, 'quantity')
          setEvent('change',newquantityInput,newPriceInput,newquantityInput, newResultSpan, 'quantity')
          //here you need to write your events handler
          
          newproductInput.addEventListener('keyup', function(e){
            if(e.which == 13){
            newPriceInput.focus()
        }
    })
    newproductInput.focus() 
    
    
    
     
    //       productsDiv.innerHTML += '<div class="product">'+
    //       '<div>'+
    //           '<input type="text">'+
    //       '</div>'+
    //       '<div>'+
    //           '<input type="number" value="0">'+
    //       '</div>'+
    //       '<div>'+
    //           '<input type="number" min="0" value="0">'+
    //       '</div>'+
    //       '<div>'+
    //           '<span>0</span>'+
    //       '</div>'+
    //   '</div>'
}