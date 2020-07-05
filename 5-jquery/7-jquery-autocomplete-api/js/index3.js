$(function () {

    
    //create the dialog
    $("#dialog").dialog()
        // close the dialog
        $("#dialog").dialog("close")

        //show dialog btn click event
        $('#showDialogBtn').click(function (e){
            e.preventDefault()
            $('#dialog').dialog("open")
        })
    
});