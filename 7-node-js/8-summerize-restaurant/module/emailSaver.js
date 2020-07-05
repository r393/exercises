const nodemailer = require('nodemailer')
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
        pass: ''
    }
})

// the client email not constant it changes
function emailSender(name,email,subject, message, callback) {
    const mailOption ={
        from: 'arowosokirebecca@gmail.com',
        to: 'bukky4realie@co.uk',
        subject: subject,
        text:email + '\n'+ name + '\n' + message
    }
    transporter.sendMail(mailOption, function(error, info) {
        if (error){
            console.log(error)
            callback(false)
        }else {
            console.log(info.response)
            callback(true)
        }
    })
}
    
 module.exports = {
     emailSender
 }