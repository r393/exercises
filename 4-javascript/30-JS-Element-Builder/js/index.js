window.onload = ()=>{
    let container = document.querySelector('#container')
    let titleElm = document.createElement('h3')
    titleElm.id = "header1"
    titleElm.innerText = 'FBW5'
    container.append(titleElm)
    let articleElm = document.createElement('p')
    articleElm.innerText = "Don't worry be happy"
    articleElm.classList.add('par1')
    container.append(articleElm)

    let span1 = document.createElement('span')
    span1.innerHTML= ",<br> I am span1"
    articleElm.append(span1)

    let htmlText = '<section>'+
    '<h2> title</h2>'+
    '<p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ex, accusantium deserunt esse tempora ipsum velit odit ea doloremque iusto expedita totam consequatur, voluptatum, quos perferendis maiores! Odit, quae rem.'
    
    '</section>'
    let container2 = document.querySelector('#container2')
    for (let i = 0; i < 100; i++) {
        container2.innerHTML += htmlText
        
    }
} 