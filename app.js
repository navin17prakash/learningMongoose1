//this is a simple step by step guide on how to use MongoDB as a service 
// also the basic steps to use mongoose to couple NodeApp and MongoDB using mongoose npm module.


//it adds 100 users to the DB and then exposes and API to read all the users in DB and return in JSON Format. 

//--BY Navin Prakash



//step 1 require the basic modules. 
var mongoose = require('mongoose');
var express=require('express');

//step 2 import the schema of the data. Shcema is defined in a seperate file.
var userSchema = require('./userSchema.js');

console.log('Schema imported.Attempting DB connection');
//Database connection url
var DBurl = 'mongodb://navinprakash:123456@ds037415.mongolab.com:37415/mnotes';

//step 3. Connect to the MongoDatabase. Refer to the api documenatation of mongoose for refrence 
mongoose.connect(DBurl,function(error){
    if(error)
        console.log('Attempted DB connection has failed.');
        else console.log("Connection is successful"); 
});



//Step 4. Creating the model.Pass the model name which will be the name of collection on the database.

var Users =mongoose.model('usersProfiles4',userSchema.userSchema);

var gappu = new Users({
    
    userid : "navin17",
    password : "tappu",
    isAdmin : true
}).save(function(err){
    if(err)
    console.log('cannot save yr');
    else console.log("mission");
    
});

var gappu1 = new Users({
    
    userid : "17",
    password : "tappu",
    isAdmin : false
}).save(function(err){
    if(err)
    console.log('cannot save yr');
    else console.log("mission");
});

var prakash = new Users({
    
    userid : "navin17prakash",
    password : "some",
    isAdmin : false
}).save(function(err){
    if(err)
        console.log('navin it is done');
        else console.log("one more ");
       });