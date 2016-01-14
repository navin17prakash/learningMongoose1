var mongoose = require('mongoose');

console.log('navin');
mongoose.connect('mongodb://navinprakash:6@ds037415.mongolab.com:37415/mnotes',function(err){
    if(err)
        console.log('something wrong');
        else console.log("ok ok");
    
});
var schema = new mongoose.Schema({
    userid : String,
    password : String,
    isAdming : Boolean
    
});

var User =mongoose.model('usersProfiles',schema);

var gappu = new User({
    
    userid : "navin17",
    password : "tappu",
    isAdmin : false
}).save(function(err){
    if(err)
    console.log('cannot save yr');
    else console.log("mission");
    
});

var gappu1 = new User({
    
    userid : "17",
    password : "tappu",
    isAdmin : false
}).save(function(err){
    if(err)
    console.log('cannot save yr');
    else console.log("mission");
    
});
//mongoose.connect('mongodb://localhost/dbname/navin',function(err){
   
