const express = require("express");
const Route = express.Router();
const Authentication=require("../controller/authentication")
const User=require("../controller/user")
const storage = multer.memoryStorage();
const upload = multer({ storage });

Route.post("/login",Authentication.login)

module.exports=Route;