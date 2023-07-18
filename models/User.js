const mongoose = require('mongoose');

//Creating the Schema
const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    }
}, {timestamps : true});


// To import the Schema anywhere in the project
module.exports = mongoose.model("User", userSchema);