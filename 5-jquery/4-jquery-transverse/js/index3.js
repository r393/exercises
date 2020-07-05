$(function () { 


    let htmlString = '<div><p> Hello FBW5 in jquery <a href="#">click here </a></p></div>'
    let smallDon = $(htmlString)
    smallDon.find('a').click(function (e) {
        e.preventDefault()
        alert('hello')
    })
    //$('#container').append(smallDon)
    
    
    let someBtn = document.createElement('button')
    // someBtn.innerText = 'button'
    $(someBtn).text('hi')


    
    $('#container').append(smallDon)
    $('#container').append(someBtn)

});