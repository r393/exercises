class Article {
    constructor(title, description, category){
        this.title = title;
        this.description = description;
        this.category = category;

    }
    render(container){
        const titleElement = document.createElement('h2');
        titleElement.innerText = this.title;

        const categoryElement = document.createElement('h4');
        categoryElement.innerText = this.category.name;

        const descriptionElement = document.createElement('p')
        descriptionElement.innerText = this.description

        container.append(titleElement)
        container.append(categoryElement)
        container.append(descriptionElement)
    }
}
class Category{
    constructor(categoryName){
        this.name = categoryName;
    }
    static News(){
        return new Category('News')
    }
    static Sport(){
        return new Category('Sport')
    }
    static Politics(){
        return new Category('Politics')
    }
    static Beauty(){
        return new Category('Beauty')
    }
}
export {Article, Category}