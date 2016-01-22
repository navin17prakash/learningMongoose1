var mongoose =require('mongoose');
var schema = new mongoose.Schema({
    userid :  String,
    password : String,
    idAdmin : Boolean
    });
module.exports.userSchema   = schema;
    