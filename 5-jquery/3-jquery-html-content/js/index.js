$(function () {
    //add click event to btn
    $('#btn1').click(function (e) {
        e.preventDefault()
        let message = $('#someDiv > p').text()
        alert(message)
    })

    // add click event to btn2
    $('#btn2').click(function (e) {
        e.preventDefault()
        $('#someDiv > h2').text('Hello EveryOne')
    })

    // add click event to btn3
    $('#btn3').click(function (e) {
        e.preventDefault()
       let message = $('#someDiv').html()
       alert(message)
    })


    // add click event to btn4
    $('#btn4').click(function (e) {
        e.preventDefault()
        $('#someDiv > p').html('I am <strong>Strong</strong>')
       
    })

     // add click event to btn5
     $('#btn5').click(function (e) {
        e.preventDefault()
        let message = $('#someDiv > input').val()
        alert(message)
    })


    // add click event to btn6
    $('#btn6').click(function (e) {
        e.preventDefault()
        $('#someDiv > input').val('the new value')
    })

     // add click event to btn7
     $('#btn7').click(function (e) {
        e.preventDefault()
        $('#someDiv > p').append('i am Extra <i>text</i>')
    })

    // add click event to btn8
    $('#btn8').click(function (e) {
        e.preventDefault()
        $('#someDiv > input').after('<p>I am a text after input')
    })


     // add click event to btn9
     $('#btn9').click(function (e) {
        e.preventDefault()
        $('#someDiv > input').before('<p>I am a text before input')
    })


    // add click event to btn10
    $('#btn10').click(function (e) {
        e.preventDefault()
        $('#someDiv > p').remove()
    })

    // add click event to btn11
    $('#btn11').click(function (e) {
        e.preventDefault()
        $('#someDiv > p').empty()
    })


})