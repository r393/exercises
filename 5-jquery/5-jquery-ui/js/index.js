$(document).ready(function () {

    $(".list").sortable({
        axis: "y",// allow movement axis
        cancel:".unsortable", //prevent element with this
        // // classes:{
        // //     "ui-sortable":"blaSortable"
        // // }
        handle: "span",
        stop: function(event, ui){
            // alert("drop")
            if(checkOrder()){
                alert('you did it')
            }
        }
    })

    //check order function
    function checkOrder(){
        let check = true
        $('.list>li>h2').each((idx, item) => {
            //console.log($(item.text))
            if((idx+1)+"" != $(item).text()){
                check = false
            }
        })
        return check
    }
    
});