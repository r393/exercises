$(document).ready(function () {
    // add click event to btn1
    $('#btn1').click(function (e) {
        e.preventDefault()
        $('#div1').addClass('redDiv')
    })

    // addclick event to btn2
    $('#btn2').click(function (e) {
        e.preventDefault()
        $('#div1').removeClass('redDiv')
    })

    // addclick event to btn3
    $('#btn3').click(function (e) {
        e.preventDefault()
        $('#div1').toggleClass('redDiv')
    })


    // addclick event to btn4
    $('#btn4').click(function (e) {
        e.preventDefault()
        console.log($('#div1').hasClass('redDiv'))
    })

    // addclick event to btn5
    $('#btn5').click(function (e) {
        e.preventDefault()
        //console.log($('window').css('width')) to get width
        //console.log($('#div1').css('padding')) // to get padding
        console.log($('#div1').css('background-color'))
    })


    // addclick event to btn6
    $('#btn6').click(function (e) {
        e.preventDefault()
        console.log($('#div1').css('backgrond-color','pink'))
    })
})