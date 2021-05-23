var mysql=require('mysql')
var con=mysql.createConnection({  //createconnection is used to create a connection between node js and mysql
    host:'localhost',
    user:'root',
    password:'root',
    database:'employee'
})

con.connect((err)=>{
    if(err) throw err
    console.log('connected')
    //create database

    /*con.query('create database employee',(err,result)=>{
        if(err) throw err
        console.log('database created')
    })

    //create table

    /*con.query('create table empDetails(empid int,empName varchar(100),empsal int)',(err,result)=>{
        if(err) throw err
        console.log('table created')
    })

    //insert

    var sqql='insert into empDetails values(11,'gokul',17000)'
    con.query(sqql,(err,result)=>{
        if(err) throw err
        console.log('value inserted created')
    })
    
    */

})
