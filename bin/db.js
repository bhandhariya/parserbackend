var mongoose = require('mongoose');

var mongoURI = "mongodb://localhost:27017/ParserApp";
// var mongoURI="mongodb://rishi:mentcom123@ds231374.mlab.com:31374/digital2"


mongoose.Promise = global.Promise;
mongoose.connect(mongoURI,{useNewUrlParser:true})
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("mongodb connection open");
});
exports.db = db;
