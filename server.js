const express = require("express");
const envFile = require("dotenv");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path")

envFile.config({path:"config.env"});

const app = express();
const PORT = process.env.PORT ||8080;

// to log request
app.use(morgan("tiny"));

//parse request to body-parser
app.use(bodyParser.urlencoded({extended:true}))

//set view
app.set("view engine","ejs");

app.use('/',require('./server/routes/router'))

app.listen(PORT,()=>{console.log('Server runnning on http://localhost:'+PORT)});
