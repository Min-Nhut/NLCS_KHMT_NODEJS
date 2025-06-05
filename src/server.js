import express from "express";
import bodyParser from "body-parser";
import view_Engine from "./config/view_Engine";
import init_Web_Routes from "./route/web";
import connectDB from './config/connectDB';
require('dotenv').config();

let app = express();

//config app
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

view_Engine(app);
init_Web_Routes(app);
connectDB();

let port = process.env.PORT || 6969;
//PORT == unsefined => port = 6969

app.listen(port, () => {
    //callback
    console.log("Backend Nodejs is runing on the port: " + port)
})