import express from "express";

let config_View_Engine = (app) => {
    app.use(express.static("./src/public"));
    app.set("View engine", "ejs");
    app.set("views", "./src/views");
    
}

module.exports = config_View_Engine;