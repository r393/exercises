let htmlpar = document.getElementsByTagName('p')
console.log(htmlpar)
Array.from(htmlpar).forEach((element,index)=>{
    console.log(element)
    element.innerHTML = index+1 +"- paragraph"
})
// let firstpar = document.getElementsByTagName('p')
// console.log(htmlpar)
// firstpar.innerHTML = 2- paragraph
// console.log(firstpar.innerHTML)


function htmlpar1 (){
    for (let i = 0; i < getElementsByTagName.length; i++) {
        const element = array[i];
        
    }
}