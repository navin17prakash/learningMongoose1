//this is a simple step by step guide on how to use MongoDB as a service 
// also the basic steps to use mongoose to couple NodeApp and MongoDB using mongoose npm module.


//it creates API routes namely login,createUser and allusers  to login ,create user and find all users

//--BY Navin Prakash



//step 1 require the basic modules. 
var mongoose = require('mongoose');
var express=require('express');
var express = require('express');
var expressApp = express();
var apiRouter = expressApp.Router();
var morgan = require('morgan');
var bodyParser = require('body-parser'); 

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

var Users =mongoose.model(configData.modelName,userSchema.userSchema);






