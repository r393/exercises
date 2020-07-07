for(let i = 0; i < 10; i++){
    for(let b = 0; b < 10; b++){
        document.write('* <br>')
    }
    document.write('//////////////<br>')
}


for(let c = 0; c < 5; c++){
    for(let a = 0;  a< 5; a++){
        document.write('* <br>')
    }
    document.write('<br>')
}


//for(let a = 0;  a < 5; a++){
   // document.write('***** <br>')
//}

for (let e = 1; e <= 3; e++) {
    for(f = 1; f <= 10; f++){
        document.write(e + '*' + f +'='+ e*f + '<br>')
    }
    document.write('<br>')
}

for (let i = 0; i <= 4; i++){
    for (let x = 0; x <= i; x++){
        document.write('*')
    }
    document.write('<br>')
}

document.write('--------------------------<br>')

for (let i = 4; i >= 0; i--){
    for (let x = 0; x <= i; x++){
        document.write('*')
    }
    document.write('<br>')
}

document.write('--------------------------<br>')

for (let i = 4; i >= 0; i--){
    for (let x = 0; x <= 4; x++){

        if(i <= x){
            document.write("*")
        }else{
                document.write("&nbsp ")
        }
        
        
    }
    document.write("<br>")
}

document.write('--------------------------<br>')