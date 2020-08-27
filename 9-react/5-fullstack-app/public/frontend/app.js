import {Article, Category} from './modules/module1.js';
import validator from 'validator';

document.querySelector('#submitBtn').addEventListener('click', e => {
    e.preventDefault();
    const title = document.querySelector('#titleInp').value
    const category = document.querySelector('#categorySelect').options[document.querySelector('#categorySelect').selectedIndex].value;
    const description = document.querySelector('#descriptionText').value
    let categoryObg;
    switch (category) {
        case 'news':
            categoryObg = Category.News();
            break;

        case 'sports':
            categoryObg = Category.Sports();
            break;
        case 'politics':
            categoryObg = Category.Politics();
            break;
        case 'Beauty':
            categoryObg = Category.Beauty();
            break;
        default:
            categoryObg = new Category('No Category')
            break;
    }
     // title
     // not empty not less than 2 chars and not more than 50 char

     // category
     // not empty

     //description
     // nt empty not less than 10 chars and not more than 1000 char   
    let errorMsgs = '';
    if (validator.isEmpty(title)){
        errorMsgs = 'Title should not be empty';
    }
    if (!validator.isLength(title,{min: 2, max: 50})) {
        errorMsgs += 'Title length should be between 2 and 50 chars\n'
    }
    if (validator.isEmpty(category)){
        errorMsgs +=  'You should choose a category\n';
    }
    if (validator.isEmpty(description)){
        errorMsgs +=  'Description should not be empty\n';
    }
    if (!validator.isLength(description, {min: 10, max: 1000})){
        errorMsgs += 'Description lenght should be between 10 and 1000 chars\n';
    }
    if(!errorMsgs){
        //send the article data to backend using fetch
        fetch('/', {
            method: 'POST',
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                title,
                category,
                description
            })
            }).then(response => {
                if (response.status === 200) {
                    const container = document.querySelector('#container')
                    const article = new Article(title, description, categoryObg)
                    article.render(container)
                    response.json().then(data => {
                        alert(data)
                    }).catch(error => {
                        alert(error)
                    })
                }
            }).catch(error => {
                alert(error)
            })
        
        
    } else {
        alert(errorMsgs)
    }
    
})