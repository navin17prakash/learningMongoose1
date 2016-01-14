var mongoose =require('mongoose');
var schema = new mongoose.Schema({
    userid : String,
    password : String,
    isAdming : Boolean 
    });
module.exports.userSchema   =schema;
    