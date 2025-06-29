import express from "express";
import home_Controller from "../controllers/home_Controller";
import userController from "../controllers/userController"

let router = express.Router();

let init_Web_Routes = (app) => {
    router.get('/', home_Controller.get_Home_Page);
    router.get('/crud', home_Controller.getCRUD);

    router.post('/post-crud', home_Controller.postCRUD);
    router.get('/get-crud', home_Controller.displayGetCRUD);
    router.get('/edit-crud', home_Controller.getEditCRUD);

    router.post('/put-crud', home_Controller.putCRUD);
    router.get('/delete-crud', home_Controller.deleteCRUD)

    router.post('/api/login', userController.handleLogin)

    return app.use("/", router);
}

module.exports = init_Web_Routes;