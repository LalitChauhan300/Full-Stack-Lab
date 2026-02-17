let fs = require('fs');
// let path = H:\full stack class\Back-End\lecture6
// console.log(__dirname);

let path = __dirname +'/data.txt'

fs.writeFile(path,"learning writefile fs using node js",(err)=>{
    if(err)
        console.log(err);
    else
        console.log("Done successfully...."); 
})

// fs.writeFile()