// install express for us to run this project
// express allows us to create end-points to listen for incoming request

//implies that the code uses strict rules
'use strict';

const express = require("express"); //import express
const {request} = require("http");

//constants
const PORT = 8080;
const HOST = '127.0.0.1'; // localhost
const OS = require('os'); // import the OS environment
const ENV = 'DEV'; // specify project is under development

//app
const app = express(); // invoke express library
app.get('/', (request, response)=>{ //listen for get request for the root of the app, callback function processes the request
    response.statusCode = 200; // return 200 status code === success.
    const msg = "Hello FSD Learners";
    response.send(msg);
});

app.get('/test', (request, response)=>{ //listen for get request
    response.statusCode = 200;
    const msg = "Hello from /test Node";
    response.send(msg);
});

app.listen(PORT, HOST); //invoke the listen method for app, listen to port: 8080 and 
console.log(`Running on http://${HOST}:${PORT}`); //log the start of the app to listen for request