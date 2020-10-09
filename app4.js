const fs = require('fs');
const http = require('http');
const server = http.createServer((req,res) => {


   res.writeHead(200, {"Content-Type": "Text/plain"});
   var myReadStream = fs.createReadStream(__dirname+'/info2.txt', 'utf8');
   myReadStream.pipe(res)
});

 server.listen(3000)
console.log("listening 3000")
