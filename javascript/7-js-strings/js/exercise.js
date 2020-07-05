
function indexesFinder(txt, chr, start){
    if(start < txt.length){
        let idx = txt.indexOf(chr, start)
        console.log(idx)
        indexesFinder(txt, chr, idx+1)
    }
}



indexesFinder("Hakuna Matata", "a", 0)





//console.log(indexesFinder("Hakuna Matata", "a", 0))
    
