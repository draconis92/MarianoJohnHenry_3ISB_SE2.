let files = fs.readdirSynch("./");
console.log(files);
try{
    let files = fs.readdirSync("./js/script3.js");
    console.log(files);
} catch(err){
    console.log("directory does not exist.")
}

let age = 17;
if(isTeenager(age)) console.log("teenager");
else console.log("not a teenager");
