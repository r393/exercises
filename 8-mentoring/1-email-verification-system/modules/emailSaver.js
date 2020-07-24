const nodemailer = require('nodemailer')
const sensitiveData = require('./sensitiveData')
// function saverContent(content, path){
//     let oldDetail = nodemailer.readFileSync(path)
//     let newDetail = oldDetail + contentfs
//     nodemailer.writeFileSync(path, newDetail)
// }

// the backend email always constant
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'arowosokirebecca@gmail.com',
        pass: sensitiveData.password()
    }
})

// the client email not constant it changes
function emailSender(email,subject, message) {
    return new Promise((resolve, reject) => {
        const mailOption ={
            from: 'arowosokirebecca@gmail.com',
            to: email,
            subject: subject,
            text: message
        }
        transporter.sendMail(mailOption, function(error, info) {
            if (error){
                console.log(error)
                reject(error)
            }else {
                console.log(info.response)
                resolve(info.response)
            }
        })
    })
    
}
    
 module.exports = {
     emailSender
 }