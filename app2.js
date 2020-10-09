const fs=require('fs');

try{

    fs.mkdirSync("./file/data");
    let readableStream=fs.createReadStream("./file/info2.txt","utf8");
    console.log("created data directory");
    readableStream.pipe(WritableStream);
}catch(err){
    console.log("directory already exist");
}