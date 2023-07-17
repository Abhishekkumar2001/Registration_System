// Importing the express
const express = require('express');
const port = 5000;

const mongoose = require('mongoose');

const app = express();


// Connecting to the database
mongoose.connect("mongodb://127.0.0.1:27017/signupDB").then(() =>{
    console.log("App is now connected to DB");
}).catch((err) =>{
    console.log(`${err}`);
})

// Listening to app
app.listen(port, (err) =>{
    if(err){
        console.log(`${err}`);
    }


    console.log(`Server is running on the port: ${port}`);
})
