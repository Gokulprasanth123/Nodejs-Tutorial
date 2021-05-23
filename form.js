var http=require('http')
var fs=require('fs')
var formidable=require('formidable')
http.createServer((req,res)=>{
 if(req.url=='/')
 {
    res.writeHead(200,{'content-type':'text/html'})
    res.write('<form action="biodata" method="post" enctype="multipart/form-data" >')
    res.write('<h1>form fill up</h1>')
    res.write('NAME               : <input type="text" name="username"><br> ')
    res.write('D.O.B              : <input type="date" name="dob"><br> ')
    res.write('Qualification      : <input type="text" name="qualification"><br> ')
    res.write('Email              : <input type="email" name="email"><br> ')
    res.write('phoneNum           : <input type="text" name="phoneNum"><br> ')
    res.write('upload your resume : <input type="file" name="uploadFile"><br> ')
    res.write('<input type="submit">');
    res.end();
 }   
 else if(req.url=='/biodata')
 {
     var form=new formidable.IncomingForm() //using formidable for getting the incoming user data
     form.parse(req,(err,fields,files)=>{  //splitting the url into pieces
         res.write('<h1>name: '+fields.username+'</h1><br>')
         res.write('<h1>dob: '+fields.dob+'</h1><br>')
         res.write('<h1>qualification: '+fields.qualification+'</h1><br>')
         res.write('<h1>email: '+fields.email+'</h1><br>')
         res.write('<h1>phone Number: '+fields.phoneNum+'</h1><br>')

         var oldpath=files.uploadFile.path //whenever the file gets uploaded it will get saved in a temporary file location which is mentioned here as Oldpath
         var newpath='C:/Users/LENOVO/'+files.uploadFile.name //providding the new path for that file
         fs.rename(oldpath,newpath,(err)=>{
             if(err)
               throw err
             res.write('<h1>your file location</h1><br>')
             res.write('<h1>old path: '+oldpath+'</h1><br>')
             res.write('<h1>new path:  '+newpath+'</h1><br>')
             res.end();
         })
     })
 }
}).listen(8090);