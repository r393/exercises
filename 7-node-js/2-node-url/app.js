const http = require('http')
const fs = require('fs')
const url = require('url')

http.createServer(function(req, res) {
console.log(req.url);


let urlObj = url.parse(req.url, true)
//console.log(urlObj);





    switch (urlObj.pathname) {
        case '/home':
            //get shared content
            let sharedText = fs.readFileSync('views/shared.html')
            res.writeHead(200, {'content-type': 'text/html'})
            let text =fs.readFileSync('views/index.html')
            //res.end("<h2>Welcome Home</h2>")
            res.end(text.toString().replace('this is a shared content',sharedText))
            break;
        
        case '/about':
            let sharedText1 = fs.readFileSync('views/shared.html')
            res.writeHead(200, {'content-type': 'text/html'})
            let text1 = fs.readFileSync('views/about.html')
            res.end(text1.toString().replace('this is a shared content',sharedText1))
            //res.end("<h2>About me</h2>")
       
            break;
        case '/contact':
             if (urlObj.query.fname){
              console.log(urlObj.query.fname);
            }

                let sharedText2 = fs.readFileSync('views/shared.html')
                res.writeHead(200, {'content-type': 'text/html'})
                let text2 = fs.readFileSync('views/contact.html')
                res.end(text2.toString().replace(/this is a shared content/g,sharedText2))

        case '/somecss':
            res.writeHead(200, {'content-type': 'text/css'})
            res.end("body{background-color:red}")
            break;

        case '/about':
            res.writeHead(200, {'content-type': 'application/json'})
            res.end("{'name': 'Rebecca', 'firstName': 'Bukola'}")
            break;
        
        default:
            res.writeHead(404, {'content-type': 'text/html'})
            res.end("<h2>404 page is not found</h2>")
            break;
    }

}).listen(4500)