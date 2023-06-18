const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const request = require('request');
const client = require('@mailchimp/mailchimp_marketing');
client.setConfig({apiKey: "f4b5f32f596c088654edffd496670ba6-us11",  server: "us11",});
app.use(express.static(__dirname));
app.use(bodyparser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})

app.listen(3000,()=>{
    console.log('server started');
})

app.post('/',(req,res)=>{
    
    var fname = req.body.firstname;
    var lname = req.body.lastname;
    var ename = req.body.emailname;
    var pname = req.body.passwordname;
    console.log(fname, lname, ename, pname);
    const subscribingUser = {firstName: fname, lastName: lname, email: ename}
    const run = async () => {
        const response = await client.lists.addListMember("48d3ff07f8", {
          email_address: subscribingUser.email,
          status: "subscribed",
          merge_fields: {
              FNAME: subscribingUser.firstName,
              LNAME: subscribingUser.lastName
          }
        });
        console.log(response);
        console.log(response.statusCode) // (optional) 
      };
      run();
      app.sendFile(__dirname+'/index.html');
})
// 48d3ff07f8