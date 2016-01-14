var mongoose =require('mongoose');
var schema = new mongoose.Schema({
    userid :  String,
    password : String,
    isAdmin : Boolean 
    });
module.exports.userSchema   = schema;
    