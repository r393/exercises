$(document).ready(function () {



    // get parent
    $('#btn1').click(function (e) {
        e.preventDefault()
        alert($('h2').parent().text())
    })


    // get children
    $('#btn2').click(function (e) {
        e.preventDefault()
        alert($('p').children().text())
    })


    // get next element
    $('#btn3').click(function (e) {
        e.preventDefault()
        alert($('h2').next().text())
    })

    // get previous element
    $('#btn4').click(function (e) {
        e.preventDefault()
        alert($('h2').prev().text())
    })

    
    // get parents
    $('#btn5').click(function (e) {
        e.preventDefault()
        alert($('h2').prev().text())
        console.log($('span'). parents())
        console.log($('span'). parentsUntil('body'))
    })


})