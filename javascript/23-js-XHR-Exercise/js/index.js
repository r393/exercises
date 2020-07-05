var appkey="12000491-41fc68d8c365df909e022ceb6";
function getData(key,keyWord,category,language,orientation,minHeight,minWidth,color,safe,orderType,page,perPage){
let url="https://pixabay.com/api/?key="+key+"&q="+keyWord+"&image_type=photo&category="+category+"&pretty=true"+(language!=""?"&lang="+language:"")+(orientation!=""?"&orientation="+orientation:"")+(language!=""?"&lang="+language:"")+(minHeight!=""?"&min_height="+minHeight:"")+(minWidth!=""?"&min_width="+minWidth:"")+(color!=""?"&colors="+color:"")+(safe!=""?"&safesearch="+safe:"")+(orderType!=""?"&order="+orderType:"")+(page!=""?"&page="+page:"")+(perPage!=""?"&per_page="+perPage:"");
let xhr = new XMLHttpRequest()
xhr.open('GET',url)
xhr.send()
let i = 0
xhr.onload = function (){

    
    if(xhr.status == 200){
        console.log(xhr.response)
        let result = JSON.parse(xhr.response);
        // result.hits.forEach(element => {
        //     document.write('<img src="'+element.largeImageURL+'" width="200">')
        // },2000);
        // console.log(result.hits)
        console.log(i, result.hits.lenght)
        setInterval(function(){
            document.body.innerHTML = ''
            document.write('<img src="'+result.hits[i].largeImageURL+'" width="200">')
            i++
            if(i >= result.hits.lenght){
                i = 0
            }
        },2000)
    }else{
        console.log(xhr.status)
    }
}
}
getData(appkey,prompt('Please enter keyword'))