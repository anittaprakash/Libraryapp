const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@webfiles.ur43e.mongodb.net/WEBFILES?retryWrites=true&w=majority');
const Schema = mongoose.Schema;
const SignupSchema=new Schema({
    firstname:String,
    lastname:String,
    email:String,
    password:String
});
var Signupdata=mongoose.model('signupdata',SignupSchema);
module.exports=Signupdata;