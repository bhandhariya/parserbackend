const mongoose= require('mongoose');
var schema = mongoose.Schema;

var userSchema = new schema({
    name:{type:mongoose.Schema.Types.String},
    mobile:{type:mongoose.Schema.Types.String},
    address:{type:mongoose.Schema.Types.String},
})

module.exports = mongoose.model("User",userSchema);