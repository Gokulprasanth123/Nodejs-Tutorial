var http=require('http')
var fs=require('fs')
var url=require('url')
http.createServer((req,res)=>{
    var webLink=url.parse(req.url,true)
    var path="."+webLink.pathname
    fs.readFile(path,(err,data)=>{
     if(err)
     {
         res.writeHead(404,{'content-type':'text/html'})
         return res.end('404 not found')
     }
     res.writeHead(200,{'content-type':'text/html'})
     res.write(data)
     res.end()
    })
}).listen(7800);