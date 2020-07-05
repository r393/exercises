const http = require('http')
const fs = require('fs')
const url = require('url')

//import nodemailer
const nodemailer = require('nodemailer')

// import oour module
const saver = require('./module/saver')

http.createServer(function(req, res) {
let q = url.parse(req.url, true)
    switch (q.pathname) {
        case '/':
            res.writeHead(200,{'content-type': 'text/html'})
            let htmlText = fs.readFileSync('views/26-HTML-CSS-Summerize/index.html')
            res.end(htmlText)
            break;
        case '/css/index.css':
            res.writeHead(200,{'content-type': 'text/css'})
            let cssText = fs.readFileSync('views/26-HTML-CSS-Summerize/css/index.css')
            res.end(cssText)
            break;
        case '/img/Logo.png':
            res.writeHead(200,{'content-type': 'image/png'})
            let logoText = fs.readFileSync('views/26-HTML-CSS-Summerize/img/Logo.png')
            res.end(logoText) 
            break;
        case '/img/hero.jpg':
            res.writeHead(200,{'content-type': 'image/jpeg'})
            let heroText = fs.readFileSync('views/26-HTML-CSS-Summerize/img/hero.jpg')
            res.end(heroText) 
            break;   
        case '/aboutus':
            res.writeHead(200,{'content-type': 'image/jpeg'})
            let aboutusText = fs.readFileSync('views/26-HTML-CSS-Summerize/aboutus.html')
            res.end(aboutusText) 
            break;   
        case '/contact':
            //saver.saverContent('Hello i am content', 'content.txt')
            if (q.query.name){
                let message = q.query.name + '\n' + q.query.subject + '\n' + q.query.message + '\n\n\n'
                saver.saverContent(message, 'content.txt')
                
                // send email
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'arowosokirebecca@gmail.com',
                        pass: 'your password'
                    }
                })
                const mailOption ={
                    from: 'blabla@gmail.com',
                    to: 'emailtosendto@bla.com',
                    subject: q.query.subject,
                    text: q.query.name + '\n' + q.query.name
                }
                transporter.sendMail(mailOption, function(error, info) {
                    if (error){
                        console.log(error)
                    }else {
                        console.log(info.response)
                    }
                })
            }
            let contactContent =fs.readFileSync('views/26-HTML-CSS-Summerize/contact.html')
            res.writeHead(200,{'content-type': 'text/html'})
            res.end(contactContent)
            break;
        default:
            res.writeHead(404, {'content-type' : 'text/html'})
            res.end("<h2>404 no page found</h2>")
            break;
    }
       
    

}).listen(5000)