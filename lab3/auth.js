let http=require('http');
let server=http.createServer((req, res)=>{

    let secret="this is secret";
    let header=req.headers.Authorization;
    if(!header){
        res.statusCode=401;
        res.write("unauthorized");
        res.end();
        return ;
    }
    if(header==secret){
        res.statusCode=200;
        res.write("Welcome");
        res.end();
        return;
    }
    else{
        res.statusCode=403;
        res.write("Invalide");
        res.end();
        return;
    }
});
server.listen(3001,()=>{
    console.log('App is running at port 3001');
})