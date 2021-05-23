var http=require('http')
http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/plain'})
    res.write('welcome to my first node app')
    res.end()
}).listen(8000);