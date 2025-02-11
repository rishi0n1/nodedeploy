var http=require("http")
var url = require("url");
var fs=require("fs")

var server=http.createServer((req,res)=>{
   // var q=url.parse(req.url,true);
    fs.readFile("./index.JSON","utf-8",(err,data)=>{
        if(err){
            console.log(err);
            res.end();
        }
        else{
           res.write(data);
           res.end();
        }

    })



})

server.listen(3007,()=>{
    console.log("server is running on port 3007");
})
