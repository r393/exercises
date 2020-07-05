$(document).ready(function () {
    //add keyup event to the input
    $('#productInput').keyup(function (e) { 
 
        //console.log($(this).val())
        let val = $(this).val()
        if(val.length >= 2){
//"query=val&hitsPerPage=100&page=1"
            let obj = {
                "requests":[
                    {"indexName":"ikea","params":`query=${val}&hitsPerPage=10&page=1`}
                ]
            };
            // ajax request
            $.ajax({
                type: "POST",
                url: "https://latency-dsn.algolia.net/1/indexes/*/queries?x-algolia-api-key=6be0576ff61c053d5f9a3225e2a90f76&x-algolia-application-id=latency",
                data: JSON.stringify(obj),
                dataType: "JSON",
                success: function (response) {
                   // if success call auto complete function
                    let names = response.results[0].hits.map(element => element.type)
                        //console.log(names)

                        runAutoComplete(names)
                }
            })
              
        } else {
            //$("#productInput").autcomplete("disable")
        }
        
    });
});
// function will run the auto complete in jquery

function runAutoComplete(data) {
    $("#productInput").autocomplete({
        source: data,
        classes: {
            "ui-autocomplete":"autocompleteclass"
        },
        messages: {
            noResults: "",
            results: function( amount){
                return ""
            }
        }
    })
    
}