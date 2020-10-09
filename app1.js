let files = fs.readdirSynch("./");
console.log(files);
try{
    let files = fs.readdirSync("./info.txt");
    console.log(files);
} catch(err){
    console.log("directory does not exist.")
}