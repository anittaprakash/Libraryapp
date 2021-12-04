const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@webfiles.ur43e.mongodb.net/WEBFILES?retryWrites=true&w=majority');
const Schema = mongoose.Schema;
const AuthorSchema=new Schema({
    name:String,
    country:String,
    genre:String,
    image:String
});
var Authordata=mongoose.model('authordata',AuthorSchema);
module.exports=Authordata;