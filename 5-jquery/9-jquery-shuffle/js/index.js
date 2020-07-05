$(document).ready(function () {
    

    


    var Shuffle = window.Shuffle
    var element = document.querySelector('.container')
    var shuffleInstance = new Shuffle(element, {
        itemSelector: '.content'
    })
    $('#btnpolitics').click(function (e) {
        e.preventDefault()
        shuffleInstance.filter('politics')
    })
    $('#btnsport').click(function (e) { 
        e.preventDefault()
        shuffleInstance.filter('sport')
    })

    $('#btnall').click(function (e) {
        e.preventDefault()
        shuffleInstance.filter(Shuffle.ALL_ITEMS)
    })
    
});