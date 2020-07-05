$(function () {
    $( "#datepicker").datepicker()

    $('#dateBTN').click(function (e) {
        e.preventDefault()
        alert($( "#datepicker" ).val())

    })
});