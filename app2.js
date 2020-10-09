
const fs = require('fs');

const path = require('path'); 

try {
    let files = fs.mkdirSync("./data");
} catch (err) {
    console.log("could not create folder...");
}

fs.createReadStream('info.txt').pipe(fs.createWriteStream('./data/info2.txt'));

fs.readFile("./info2.txt", "utf-8", (err, data) => {
    if(!err){
        console.log(data)
        
    } else {
        console.log("file does not exist")
    }
})
