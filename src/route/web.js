import express from "express";
import home_Controller from "../controllers/home_Controller";

let router = express.Router();

let init_Web_Routes = (app) => {
    router.get("/", home_Controller.get_Home_Page);

    router.get("/", (req, res) => {
        return res.send("Hello world with Sea")
    });
    return app.use("/", router);
}

module.exports = init_Web_Routes;