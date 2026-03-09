var express = require('express')
var route = express.Router();

var Conntroller = require('../controller/UserControllers');

route.get("/get_user/:id", Conntroller.getUserById);
route.get("/get_all_users/", Conntroller.getAllUsers);
route.post("/save_user", Conntroller.saveUser);
route.put("/update_user/:id", Conntroller.updateUser)

module.exports = route;