$(document).ready(function () {
    //$(selector).animation(object Options)
    //$(selector).animation(object Options, time)
    //$(selector).animation(object Options, time, callback)
    //option the style that will be changed
    //time by milleseconds
    //calback is a function will run after finishing the animation

    $('#btn').click(function (e){
        e.preventDefault()
        $('#someDiv').animate({'left': '300px',
            'opacity': '0'
        },3000, function () {
            alert('done')
          })
    })
    //mouseevent for someDiv
    $('#someDiv').mousemove(function (e) { 
        // values: e.clientX, e.clientY, e.pageX, e.pageY
        // $('#someDiv').stop()
        $(this).stop()
    });


        // create a function to make the bx go back
      let goBack = function () {
        $('.container > div:nth-child(1)').animate({
            'left':'0'
        }, 2000, goFront)
    }
        
    let goFront = function() {
        $('.container > div:nth-child(1)').animate({
            'left':'350px'
        }, 2000, goBack)
    }
    goFront()

    // chain methods jquery
    $('.chain').animate({
        'height':'200px'
    },1000)
    .slideUp(2000)
    .text('Hello i am here')
    .slideDown()
    .fadeOut(1000, function () {
        alert("mombo jumbo done")
    })
})