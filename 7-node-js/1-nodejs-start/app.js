const http = require('http')

const fs = require('fs')

http.createServer((req, res) => {
    //res.writeHead(200, {'content-type': 'application/json'})
    //res.writeHead(200, {'content-type': 'text/plain'}) //send text data
     //send html

    // let obj = {
    //     name: "Rebecca",
    //     firstName: "Arowosoki"
    // }
    //res.end(JSON.stringify(obj))

    // let myHtml =
    // '<html>'+
    // '<head>'+
    // '<title>my first server page</title>'+
    // '</html>'+
    // '<head>'+
    // '<body>'+
    // '<h2>text</h2>'+
    // '</body>'+
    // '</html>'
    // res.end(myHtml)
    //send html text from file

    // reading file
    // fs.readFile('/views/index.html', (err, data) => {
    //     //console.log(err);
    //     res.end(data)
    // })


    console.log(req.url);
    if(req.url =="/1"){
        res.writeHead(200, {'content-type': 'text/html'})
        let text = fs.readFileSync('views/index.html')
        res.end(text)
    }else{
        if (req.url == "/2") {
            res.writeHead(200, {'content-type': 'text/html'})
            let text = fs.readFileSync('views/index1.html')
            res.end(text)
        }else{
            if (req.url == "/views/style.css") {
                res.writeHead(200, {'content-type': 'text/css'})
                let text = fs.readFileSync('views/style.css')
                res.end(text)
            }else{
                res.writeHead(404, {'content-type': 'text/html'})
                res.end("404 no such page")
            }
        }
    }
    


}).listen(4000)