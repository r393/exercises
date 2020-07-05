// $(selector).method()
// alternative windo.onload
$(document).ready(function (){
    //alert('document is loaded')
    //$('.someDiv').hide

    $("#hide").click(function (e){
        // show or hide the content
        $(".someDiv").toggle(500)
        // ceck hide context to set the right text
        if($(this).text() == 'hide'){
            $(this).text('show')
        }else{
            $(this).text('hide')
        }
    })
})

//diff way
$(function(){
    
    });
    