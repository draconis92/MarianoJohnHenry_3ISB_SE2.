const http = require('http');

const server = http.createServer((req, res) => {
    if  (req.url === "/Juan"){
        res.writeHead(200, {"Content-type":"Text/html"});
        res.write("<html><body><h1>Hello Juan</h1></body></html>")
        res.end();
    }else if (req.url === "/Pedro"){
        res.writeHead(200, {"Content-type":"Text/html"});
        res.write("<html><body><h1>Hello Pedro</center></h1></body></html>")
        res.end();
    }else {
        res.writeHead(404, {"Content-Type": "text/html"})
        res.writeHead(404, {"Content-type":"Text/html"});
        res.write("<html><body><h1>Page not found</h1></body></html>")
        res.end();
    }
 })
.listen(3000);

console.log("listening to port 3000");