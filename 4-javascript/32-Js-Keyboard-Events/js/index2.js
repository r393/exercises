window.onload = () =>{
    let input1 = document.querySelector('#input1')
    let input2 = document.querySelector('#input2')
    let input3 = document.querySelector('#input3')
    input1.addEventListener('keypress',function(e){
    
       if(e.which == 13){// enter button
        input2.focus();
       }
        
    })
    input2.addEventListener('keypress',function(e){
        if(e.which == 13){
            input3.focus()
        }
    })
    input3.addEventListener('keypress',function(e){
        if(e.which == 13){
            input1.focus()
        }
    })
    //let input = document.querySelector('#input1')
    //creater(input)
    //function creator(someInput){
        //someInput.addEventListener('keypress',function(e){
         //   if(e.which == 13){
          //      let container = document.
           //      let newInput
           // }
        //})
    //}
}
