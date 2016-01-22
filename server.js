//this is a simple step by step guide on how to use MongoDB as a service 
// also the basic steps to use mongoose to couple NodeApp and MongoDB using mongoose npm module.


//it creates API routes namely login,createUser and allusers  to login ,create user and find all users

//--BY Navin Prakash



//step 1 require the basic modules. 
var mongoose = require('mongoose');
var express=require('express');
var express = require('express');

var morgan = require('morgan');
var bodyParser = require('body-parser'); 
var port =3000;

var expressApp = express();
var apiRouter = express.Router();

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
expressApp.use(bodyParser.json());
expressApp.use(bodyParser.urlencoded({extended : false}));

apiRouter.get('/sample',function(request,response){
   response.send('first api running'); 
});


apiRouter.get('/setuprootuser',function(request, response){
    var rootUser = new Users({
       userid : 'root',
       password : 'root',
       isAdmin : true 
    });
    rootUser.save(rootUser,function(error){
        if(error){
            console.log("Root user cannot be created");
            response.send('Root User cannot be created. Please attempt with debugging');
        }
        else
        {
            console.log('Root User has been successfully created.This user can be used to access the system');
            response.send('Root user has been created with adminstrator access.');
        }
    });
});
apiRouter.post('/login',function loginRouteCallback (request,response){
    Users.findOne({userid : request.body.userid }, function findOneCallback (error,user){
    if(user){ 
               if(user.password === request.body.password){
               response.send('login successfull'+'by'+ request.body.userid);
              } 
     else{
         console.log("search failed");
         response.send('fatal error,cannot login, try again');
         }
     }  
    });
});

apiRouter.post('/createuser',function createUserCallback(request,response){
   var saveObject = new Users({
       userid : request.body.userid,
       password : request.body.password
   });
   saveObject.save(saveObject,function saveCallback(error){
       if(!error) {console.log('User has been saved successfully');
                  response.send('user'+request.body.userid+'created');
                  }
       else console.log('Save operation has failed');
   });
});    

expressApp.use('/api',apiRouter);
expressApp.listen(port);
console.log('listening on port' + port);







