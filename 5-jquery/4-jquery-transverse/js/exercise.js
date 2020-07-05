$(document).ready(function (){


     $( 'nav>div>div' ).click(function(e) {
         e.preventDefault()
        $( 'nav>ul' ).slideToogle()
       });

       $(window).resize(function () {
           if($('nav').width()>=5000){
               $('nav>ul'.fadeIn())
           }else{
            $('nav>ul'.fadeOut())
           }
       })
})