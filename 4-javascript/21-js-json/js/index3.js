let xhr = new XMLHttpRequest();
xhr.open('GET', '/data.json');
xhr.send();
xhr.onload = function (){
    if(xhr.status == 200){
        let products = JSON.parse(xhr.response).arrayOfProducts
        for (let i = 0; i < products.length; i++){
                let productHtml = (i + 1) +'<img src = "' + products[i].imgUrl + '" width = "50">'
             productHtml += '  ' +products[i].name;
             productHtml += '<sub><del>      ' +(products[i].price * 2) + 'Euro</del>'
             productHtml += '<b>     '+products[i].price + 'Euro</b><br>';
             document.write(productHtml)
        }     
        // products.forEach(product => {
        //     let productHtml = '<img src = "' + product.imgUrl + '" width = "50">'
        //     productHtml += '  ' +product.name;
        //     productHtml += '<sub><del>      ' +(product.price * 2) + 'Euro</del>'
        //     productHtml += '<b>     '+product.price + 'Euro</b><br>';
        //     document.write(productHtml)  
        // });
    }
}