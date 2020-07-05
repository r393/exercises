window.onload = function (){
    // my data that should be shown in the table
    //tutorial link is https://www.cssscript.com/dynamic-data-table-vanilla-javascript/ 
    let myData = {
        "headings":['product name','product price','quatity','total'],
        "data":[
            ['keyboard','5','18','50 Eur'],
            ['House','5','10','50 Euro'],
            ['screen','50','18','500 Eur']
            
        ]
    }
    let myTable = document.querySelector('#blaTable')
    let mydataTable = new DataTable(myTable, {
        data: myData,
        nextPrev: false,
        searchable: false
})
    let productNameInput = document.querySelector('#productNameInput')
    let productpriceInput = document.querySelector('#productpriceInput')
    let quantityInput = document.querySelector('#quantityInput')
    document.querySelector('#addRowbtn').addEventListener('click', function(e){
        // add new row
        //mydataTable.rows().add(['Headset','10','15','150 Eur'])



        let totalPrice = parseFloat(productpriceInput.value) * parseFloat(quantityInput.value) + 'Eur'
        mydataTable.rows().add([productNameInput.value, productpriceInput.value, quantityInput.value, totalPrice])
        productNameInput.value = ''
        productpriceInput.value = ''
        quantityInput.value = ''
        //  end add click event function scope
    })

    // end onload scope
}
