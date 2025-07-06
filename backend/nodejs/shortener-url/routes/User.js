const express = require('express')
const router = express.Router();


const { handleLogin, handleSignUP } = require("../controllers/user")

router.post("/signup", handleSignUP)
router.post("/login", handleLogin)

module.exports = router