let str = 'Hello World'
//search like indexOf
//console.log(str.search('l'))

console.log(str.slice(0, 7))


let findIndexSecond = txt =>{
return txt.indexOf(' ') 
}
console.log(findIndexSecond("blablablabla bla bla bla"))

let findIndexThird = txt =>{
    //let firstSpaceIdx = txt.indexOf(' ') 
    //let secondSpaceIdx = txt.indexOf(' ',firstSpaceIdx + 1)
    //return secondSpaceIdx + 1

    return txt.indexOf(' ',txt.indexOf(' ') + 1)+1

    }
    console.log(findIndexThird("Hello My Name is Rebecca"))


    let txt = 'Hello my name is Rebecca'
    let firstTxt = txt.indexOf(' ') + 1
    let secondTxt = txt.indexOf(' ',firstTxt)
    let secondWord = txt.slice(firstTxt,secondTxt)
   // console.log(txt.slice(txt.indexOf(' ')+1,txt.indexOf(' ',txt.indexOf(' ') + 1)))
     console.log(secondWord)