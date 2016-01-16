var mongoose =require('mongoose');
var schema = new mongoose.Schema({
    userid :  String,
    password : String
    });
module.exports.userSchema   = schema;
    