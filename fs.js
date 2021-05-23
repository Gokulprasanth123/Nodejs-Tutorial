var fs=require('fs')
fs.readFile('./demo.txt',(err,data)=>{
    if(err)
    {
        console.log(err)
    }
    console.log('async: '+data.toString())
})
fs.appendFile('./demo.txt','nalla irukkingala',(err)=>{
     console.log(err)
})
/*fs.unlink('./demo.txt',function(err){
    console.log(err)
})*/
/*var data=fs.readFileSync('./demo.txt')
console.log('sync'+data.toString())*/
fs.open('demo.txt','r',function(err)
{
    console.log(err)
})