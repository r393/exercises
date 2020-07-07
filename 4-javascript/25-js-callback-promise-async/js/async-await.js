let grade = 40
let stop1year = true

let newGrade = new Promise((resolve, reject)=>{
    if (grade >= 60){
        resolve('You wil be a  good developer')
    } else {
        reject('you might need to seek alternative')
    }
})
let newGrade1 = new Promise((resolve, reject)=>{
    if (stop1year){
        resolve(true)
    } else{
        reject(false)
    }

})
newGrade.then(message=>{

    newGrade1.then(() =>{
        console.log('you stoped one year so you are an assistant now')
    }).catch(()=>{
        console.log(message)
    })
    
}).catch(errormessage=>{
    newGrade1.then(()=>{
        console.log('you stop one year so you need to study again')
    }).catch(() =>{
        console.log(errormessage)
    })
})

async function checkWorker() {
    let message = await newGrade
    let errormessage = await newGrade1
    console.log(message)
    console.log(errormessage)
}
checkWorker()

