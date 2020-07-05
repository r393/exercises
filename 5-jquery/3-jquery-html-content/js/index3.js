$(document).ready(function () {
    $('.collapse > h2 > span').click(function (e) {
        e.preventDefault()
        $('.collapse > div').slideUp()
        //$(this).parent().next().slideToggle()


        // change the switch from + / -
        let currentState = $(this).text()
        $('.collapse > h2 > span').text('+')
        
        
        //currentState == '-' ? $(this).text('+').parent().next().slideUp() : $(this).text('-').parent().next().slideDown()
        //$(this).text()=='-'? $(this).parent().next().slieDown() : $(this).parent().next().slideUp()
         
        //or you can use chain methods on jquery
        currentState == '-'? $(this).text('+').parent().next().slideUp() : $(this).text('-').parent().next().slideDown()
        
        
        // using normal if statement
        //if(currentState == '-'){
        //    $(this).text('+').parent().next().slideUp()
        //}else{
        //    $(this).text('-').parent()
        //}
    })
})