const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@webfiles.ur43e.mongodb.net/WEBFILES?retryWrites=true&w=majority');
const Schema = mongoose.Schema;
const BookSchema=new Schema({
    title:String,
    author:String,
    genre:String,
    image:String
});
var Bookdata=mongoose.model('bookdata',BookSchema);
module.exports=Bookdata;