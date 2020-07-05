window.onload = () =>{
    let input1 = document.querySelector('#input1')
    let input2 = document.querySelector('#input2')
    input1.addEventListener('keypress',function(e){
      // console.log(e)
       if(e.which == 13){
        input2.focus()
       }
        
    })
    input2.addEventListener('keypress',function(e){
        if(e.which == 13){
            input1.focus()
        }
    })
}