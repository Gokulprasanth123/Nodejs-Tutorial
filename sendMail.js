var nodemailer=require('nodemailer')//enable less ecure apps to send mail(https://www.google.com/settings/security/lesssecureapps)
var sender=nodemailer.createTransport(//used to send a message to another

    {
        service:'gmail',//service may be gmail,yahoo etc
        auth :{
            user:'gokulprasanth.1905028@srec.ac.in',
            pass:'gokulprasanth12'//username and password of that account
    }
}
);

var composemail={//this variable consistes of from,to,subject and body of the mail
   from:'gokulprasanth.1905028@srec.ac.in',
   to:'gokulneymer@gmail.com',
   subject:'welcome',
   text:'hai gokulprasanth'
}

sender.sendMail(composemail,(err,info)=>{
    if(err)
    {
        console.log(err)
    }
    else{
        console.log('mail sent'+info.response)//info.response-for printing the response status also
    }
})