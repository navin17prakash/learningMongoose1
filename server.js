//this is a simple step by step guide on how to use MongoDB as a service 
// also the basic steps to use mongoose to couple NodeApp and MongoDB using mongoose npm module.


//it adds 100 users to the DB and then exposes and API to read all the users in DB and return in JSON Format. 

//--BY Navin Prakash



//step 1 require the basic modules. 
var mongoose = require('mongoose');
var express=require('express');
var express = require('express');
var expressApp = express();
var apiRouter = expressApp.Router();


//step 2 import the schema of the data. Shcema is defined in a seperate file.
var userSchema = require('./userSchema.js');
var configData = require('./config.js');
var connectionString = configData.databaseConnectionString;
console.log('Schema imported.Attempting DB connection');

//step 3. Connect to the MongoDatabase. Refer to the api documenatation of mongoose for refrence 

mongoose.connect(connectionString,function(error){
    if(error)
        console.log('Attempted DB connection has failed.');
        else console.log("Connection is successful"); 
});




//Step 4. Creating the model.Pass the model name which will be the name of collection on the database.

var Users =mongoose.model('usersProfiles9',userSchema.userSchema);
var isAdminValue=false;
for(var i=0;i<100; i++) //note- this loop will start running even before connection is successful. Non blocking nature of node.
{
    var userIdValue ="ABN" + i; //some random user id generation.100 user id genration.
    
    var passwordValue="encrypted" + i;
    
    var toBeInsterted = new Users ({
    userid :   userIdValue ,
    password : passwordValue,
    isAdmin : isAdminValue});
    isAdminValue = !(isAdminValue);
    //console.log(Object.keys(toBeInsterted));
    toBeInsterted.save(function(error){
       if(!error)
       {
           console.log("object save successfully to DB");
           
           
       }
        else console.log("Save failed to DB");
       
    });    
    
}


var router =express.Router();

router.route('/hello').get(function(req,res){
    res.send('hello hello hello');
    
});
expressApp.use('/hello',router);
expressApp.listen(3000, function(){
    console.log('am listending expressApp');
})
console.log(Object.keys(router));