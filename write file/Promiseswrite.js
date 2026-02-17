let fs=require('fs/promises');

let path=__dirname+'/abc.txt';
fs.writeFile(path,"learning writeFile in node js using promises")
.then(()=>{
    console.log("done successfully....");
})
.catch((err)=>{
    console.log(err);
})