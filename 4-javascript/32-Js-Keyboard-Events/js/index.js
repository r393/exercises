window.onload = () =>{
    let input = document.querySelector('#someInput')
    input.addEventListener('keypress', function(e){
        //alert(e.which)
        //return
        //only capital letters are allowed in te input
        let checkVlidate = false

        if ((e.which >= 65 && e.which <= 90)){
            checkVlidate = true
        }

        if(e.which == 196 || e.which == 220){
            checkVlidate = true
        }    
        // if((e.which >= 65 && e.which <= 90) || (e.which == 196 || e.which == 220)){
        //    checkVlidate = true
        //}

        if(checkVlidate){
            e.preventDefault()
        } 
    })   
            
}