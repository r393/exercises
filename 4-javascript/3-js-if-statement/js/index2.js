let grade = 60

// if (grade >= 50)
// {
//    console.log( "you passed")
// }
// else{
//     console.log("you failed")
// }

//if (grade >= 50 && grade < 60)
//{
//  console.log("not bad grade")
//}

if (grade < 0 || grade > 100)
{
    console.log("this is not the right input")
} else{
    if (grade < 50 && grade > 0)
    {
        console.log("failed")
    } else {
        if (grade < 60 && grade >= 50){
                console.log("good")
        } else {
            if (grade < 80 && grade >= 60){
                    console.log("verygood")
            } else {
                if(grade <= 100 && grade >= 80){ 
                    console.log("excellent")

                }
            
            }
        }     
    }
}
