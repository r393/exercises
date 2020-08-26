import {Article, Category} from './modules/module1.js';

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

    const container = document.querySelector('#container')
    const article = new Article(title, description, categoryObg)
    article.render(container)
})