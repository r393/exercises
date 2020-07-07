let xhr = new XMLHttpRequest()
xhr.open('GET', 'https://api.chucknorris.io/jokes/random')
xhr.send()
xhr.onload = function(){
    //console.log(xhr.response)
    let joke = JSON.parse(xhr.response)
    document.write('<img src="'+joke.icon_url+'" >')
    document.write("<h1>"+joke.value+"</h1>")
}