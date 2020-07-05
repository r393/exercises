$(document).ready(function () {
    // $.ajax({
    //     type: "method", //get, post, update,....
    //     url:'url',  //the url ./data.json
    //     data: 'data',      //sending data
    //     dataType: 'datatype',// data type json, text
    //     success: function (response){

    //     }
    // })

    // $.ajax({
    //     type: "GET",
    //     url: "./data.json",
    //     success: function (response){
    //         console.log(response)
    //     },
    //     error:function (error){
    //         console.log(error)
    //     }
    // })


    
    

        let obj = {
            "requests":[
                {"indexName":"ikea","params":"query=chair&hitsPerPage=100&page=1"}
            ]
        };


        $.ajax({
            type: "POST",
            url: "https://latency-dsn.algolia.net/1/indexes/*/queries?x-algolia-api-key=6be0576ff61c053d5f9a3225e2a90f76&x-algolia-application-id=latency",
            data: JSON.stringify(obj),
            dataType: "json",
            success: function (response) {
                console.log(response)
                // //  console.log(response.results[0].hits)
                // //  response.results[0].hits.forEach(hit => {
                    
                // // });
                let dataArr = response.results[0].hits
                let container = $('.container')
                dataArr.forEach(product => {
                    let htmlString = '<div class="product">'+
                    '<div>' + product.name + '</div>' +
                    '<div>'+
                    '<span class="gray"></span>'+
                    '<span class="gray"></span>'+
                    '<span class="gray" ></span>'+
                    '<span class="gray"></span>'+
                    '<span class="gray"></span>'+
                    '</div>'+

                    
                        '<div>'+ product.price + 'Euro</div>'+
                        '<div>'+ 
                            '<img src="' + product.image +'width="100" alt="">'+
                        '</div>'+
                    '</div>'
                    
                    //IMPORTANT convert string to jquery DOM element
                    let htmlProduct = $(htmlString)
                    // create Rate stars
                    htmlProduct.find('div>span.gray').each((idx, star) => {
                        if (idx < product.rating){
                            $(star).addClass('gold')
                            $(star).removeClass('gray')
                        }
                    })
                    container.append(htmlProduct)
                });
                
            }
        });
    
        
   
    
})