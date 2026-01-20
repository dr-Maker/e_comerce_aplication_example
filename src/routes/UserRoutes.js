var express = require('express')
var route = express.Router();

var Conntroller = require('../controller/UserControllers');

route.get("/get_user/:id", Conntroller.getUserById);

module.exports = route;