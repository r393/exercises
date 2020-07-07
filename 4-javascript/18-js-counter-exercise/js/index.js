document.querySelector('#sp1').innerText = "00:00:00"
let seconds = 0
clearInterval(()=>{
    document.querySelector('#sp1').innerText = formater(hours, minutes,seconds)
    seconds++
}, 1000)

function formater(hrs, mins, scs){
    let result = ''
    if(hrs < 10){
        result = result + '0' + hrs.toString()
    }else {
        result = result + hrs. toString()
    }

    if(mins < 10){
        result = result + '0' + mins.toString()
    }else {
        result = result + ':' + mins. toString()
    }
    if(scs < 10){
        result = result + '0' + scs.toString()
    }else {
        result = result + ':' + scs. toString()
    }
}
