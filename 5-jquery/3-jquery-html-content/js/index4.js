$(document).ready(function () {

    $('#btn1').click(function (e) {
        e.preventDefault()
        //width return the element width without padding border margin
        alert($('.someDiv').width() + "X" + $('.someDiv').height())
    })

    $('#btn2').click(function (e) {
        e.preventDefault() 
        // innerwidth is the div width + padding
        alert($('.someDiv').innerWidth() + "X" + $('.someDiv').innerHeight())
    })
})