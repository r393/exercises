window.onload = () => {
    let div1 = document.querySelector('#div1')
    let div2 = document.querySelector('#div2')
    let body = document.querySelector('body')
    
    let div1Trigger = false
    let div2Trigger = false
    
     div1.addEventListener("touchstart",(e) => {
         div1Trigger = true
     })
     div1.addEventListener("touchend",(e) => {
        div1Trigger = false
    })
    div2.addEventListener("touchstart",(e) => {
        div2Trigger = true
    
    })
    
    div2.addEventListener("touchend",(e) => {
        div2Trigger = false
    
    })
    
    body.addEventListener("touchend",(e) => {
        
        if(div1Trigger === true && div2Trigger === true){
            alert ("Dont touch me")
        }
    
    })
}




