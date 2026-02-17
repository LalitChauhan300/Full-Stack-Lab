let http= require('http');
let server=http.createServer((req, res)=>{
    res.statusCode=204;
    res.write("learning http module");
    res.end();
})
server.listen(3000,()=>{

});