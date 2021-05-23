var mongoClient=require('mongodb').MongoClient;//driver for connecting mongodb and node js

var url='mongodb://localhost:27017/empdb';//localhost for mongodb

mongoClient.connect(url,{ useUnifiedTopology: true },(err,db)=>{ //connecting the mongodb and node js
    if(err) throw err;
    var dbname=db.db('empdb');//create the db using db.db()

    //create a table(collection)

    dbname.createCollection('empDetails',(err,res)=>{//create a collection using createCollection method
        if(err)
        {
            console.log(err)
        }
        console.log('colection created successfully')
    });

    //inserting one record

    dbname.collection('empDetails').insertOne({name:'gokul',city:'chennai'},(err,res)=>{
        if(err)
        {
        console.log(err)
        }
        console.log('document(row) inserted successfully');

   })

   //inserting many record

   var muldata=[{
       name:'prasanth',city:'coimbatore'
   },{
       name:'praveen',city:'bombay'
   }]
   dbname.collection('empDetails').insertMany(muldata,(err,res)=>{
       if(err)
       {
           console.log(err)
       }
       else{
           console.log('records inserted successfully');
       }
   })

   //find the values from collection using findone

   dbname.collection('empDetails').findOne({},(err,res)=>{
    if(err)
    {
        console.log(err)
    }
    else{
        console.log(res.name);
    }
})

  //find the values using find

  dbname.collection('empDetails').find({},toArray((err,res)=>{  //we need to convert the values to array since the the values are inserted in array format
    if(err)
    {
        console.log(err)
    }
    else{
        console.log('records inserted successfully');
    }
}))

   //finding values of one particular guy

   dbname.collection('empDetails').find({name:'gokul'},toArray((err,res)=>{
       if(err)
       {
           console.log(err)
       }
       else{
           console.log('records inserted successfully');
       }
   }))

   //update using updateOne


   var needToUpdate={city:'coimbatore'}
   var newValue={$set:{city:'trichy'}}

   dbname.collection('empDetails').updateOne(needToUpdate,newValue,(err,res)=>{
    if(err)
    {
        console.log(err)
    }
    else{
        console.log('records inserted successfully');
    }
})

  //sorting ascending(if it is ascending to descending put 1)
  
  var sorting={city:1}
  dbname.collection('empDetails').find().sort(sorting).toArray((err,res)=>{
    if(err)
    {
        console.log(err)
    }
    else{
        console.log('records inserted successfully');
    }
    })

  //sorting descending(if it is descending to ascending put -1)
  
  var sorting={city:-1}
  dbname.collection('empDetails').find().sort(sorting).toArray((err,res)=>{
    if(err)
    {
        console.log(err)
    }
    else{
        console.log('records inserted successfully');
    }
   })


  //drop collection

  dbname.dropCollection('empDetails',(err,res)=>{
      if(err) throw err
      console.log('db dropped')
    })
    db.close();
    })  