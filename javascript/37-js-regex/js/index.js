// you need to write your regex pattern inside/^HERE/
// \d a digit (number)
// [a-z] check char is between a and z
// \s work with space


// 1st task
// write a regex to check that
// first char is number
// second is small letter
// third is capital letter
//fourth is number

// 2nd task
// write a regex to check that
// first char is number
// second is swhite space
// third is capital letter
//fourth is number

// 3rd task
// check if text is an email

// 4th task
// regex to match german phone number
//+49 152 9081820


// 5th task
// create an input and a Button
// on botton click
// if the input value is a german phone number, set the input border color green
// else set the input border color red


// 6th task
//create a regex to check site name
// for example www.digitalcareerinstitute.org valid




let someText = '364bsdsddsd'
let regex = new RegExp(/^\d\d\d[a-n]/)
let testResult = regex.test(someText)
console.log(testResult)

// 1st task solution
let text1 = '1gF156fdg'
let regex1 = new RegExp(/^\d[a-z][A-Z]\d/)
console.log(regex1.test(text1))


// 2nd task solution
let text2  = '5 R56dg'
let regex2 = new RegExp(/^\d\s[A-Z]\d/)   //  it also work with space(/^\d [A-Z]\d/)
console.log(regex2.test(text2))

// 3rd task solution

let text3 = 'fff@er.rr'
let regex3 = new RegExp(/^\w+@[a-zA-Z]+?\.[a-zA-Z]{2,3}$/)
console.log(regex3.test(text3))

// 4th task solution
 let text4 = '+49 15290818206'
 let regex4 = new RegExp(/^((\+49)|(0049))(\s|)((\d{11})|(\d{10}))$/)           //(/^\(?\+\(?49\)?([- ()]?\d[- ()]?){10}/)
 console.log(regex4.test(text4))


 // 5th task solution

 window.onload = function (){

     let inp1 = document.querySelector('#inp1')
     let btn1 = document.querySelector('#btn1')
     
     btn1.addEventListener('click', function(){
         if(regex4.test(inp1.value)){
             inp1.classList.add('valid')
             inp1.classList.remove('invalid')
         
            }else{
             
             inp1.classList.remove('valid')
             inp1.classList.add('invalid')
         }
         // 6th solution
         let inp2 = document.querySelector('#inp2')
         let regex5 = new RegExp(/^www.[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?$/)
         if (regex5.test(inp2.value)){
            inp2. classList.add(valid)
            inp2. classList.remove(invalid)
         }else{
            inp2. classList.remove(invalid)
            inp2. classList.add(valid)
         }
         
     })


     let addressChunks = address.split(".");
        let regex6 = new RegExp (/^((25[0-5])|(((1[0-9]|2[0-4])|[1-9])?[0-9]))$/);
        Pattern p = Pattern.compile(regex6);
        for(s.addressChunks){
            Matcher m = p.matcher(s);
            if(!m.find(s)){
                return false;
            }
        }
        return true;

 }


 //Homework
 // regex to check ip address
 // 127.123.3.1
 // 500.55.44.1 not valid
 // ip address cntains 4 numbers sepeated by dot(.) and each number should be btw[0-255]