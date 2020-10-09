const http = require('http');

const server = http.createServer((req, res) => {
    if  (req.url === "/pageOne"){
        res.writeHead(200, {"Content-type":"Text/html"});
        res.write("<html><body><h1>Page 1</h1></body></html>")
        res.end();
    }else if (req.url === "/pageTwo"){
        res.writeHead(200, {"Content-type":"Text/html"});
        res.write("<html><body><h1>Page 2</center></h1></body></html>")
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