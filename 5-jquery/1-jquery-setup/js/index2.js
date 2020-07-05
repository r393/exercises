$(document).ready(function (){
    $('#btn1').click(function (e) {
        e.preventDefault();
        $('.div1').fadeIn(2000)
    })
    $('#btn2').click(function (e) {
        e.preventDefault();
        $('.div1').fadeOut(2000)
    })

    $(".collapseTitle > a").click(function(e) {
        e.preventDefault()
        $(".collapseContent").slideToggle();

    })
})