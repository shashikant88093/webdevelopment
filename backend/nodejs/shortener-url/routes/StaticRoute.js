const express = require('express')
const router = express.Router();


async function handleViewsInputUrl(req, res) {
     res.render('pages/index');
}

async function handleviewSignup(req, res) {
     res.render('signup/index')
}

async function handleviewLogin(req, res) {
     res.render('login/index')
}

router.get("/inputfield", handleViewsInputUrl)
router.get("/signup", handleviewSignup)
router.get("/login", handleviewLogin)

module.exports = router
