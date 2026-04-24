const express = require("express");

const router = express.Router();


const {

    registerUser,

    loginUser,

    getUser

} = require("../controllers/userController");


const verifyToken = require("../middleware/authMiddleware");



// register route

router.post("/register", registerUser);



// login route

router.post("/login", loginUser);



// protected route

router.get("/getuser", verifyToken, getUser);



module.exports = router;