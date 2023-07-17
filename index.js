// Importing the express
const express = require('express');
const port = 5000;

const app = express();


// Listening the server
app.listen(port, (err) =>{
    if(err){
        console.log(`${err}`);
    }


    console.log(`Server is running on the port: ${port}`);
})
