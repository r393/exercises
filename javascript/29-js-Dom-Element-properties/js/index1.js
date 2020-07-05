window.onload = () =>{
    // let input = document.querySelector('#someInput');
    // console.log(input.getAttribute('placeholder'))
    // input.setAttribute('teacher','ahmad')
    // console.log(input.getAttribute('blabla'))

    let div = document.querySelector('#div1');
    div.setAttribute('class','something')
    console.log(div.getAttribute('class'))

    //document.querySelector('#someInput').setAttribute
    //
    let input = document.querySelector('#someInput')
    // higher quality code than lines number 6, 7
    // input.setAttribute('type','checkbox')
    // input.setAttribute('class','someclass')

    // let str = 'enter your name'
    // let arr = str.split('')
    // let i = 0
    // stor = ''
    // setInterval(() => {
    //     if (i < arr.length) {
    //         stor +=arr[i]
    //         input.setAttribute('placeholder',stor)
    //         i++
    //     }else{
    //         i=0
    //         stor = ''
    //     }
    // }, 200);


    let placeholder = input.getAttribute('placeholder')
    let counter = 0
    setInterval(()=> {
        counter++
        let txt = placeholder.substr(0,counter)
        input.setAttribute('placeholder',txt)
        if(counter == placeholder.length){
            counter = 0
        }
    }, 200)
    
}