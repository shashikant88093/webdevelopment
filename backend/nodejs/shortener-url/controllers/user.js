const { v4: uuidv4 } = require('uuid')

const USER = require('../models/user')

// Auth 
const {setUser} = require("../service/auth")
async function handleSignUP(req, res) {
    const { userName, email, password } = req.body
    console.log(userName, email, password)
    if (!email && !password && userName) return res.status(400).json({
        error: "All fields are required"
    })
    const newUser = await USER.create({
        userName,
        email,
        password
    })


    if (!newUser) {
        return res.status(500).json({ error: "Failed to store user in database" });
    }

    return res.send(newUser);



}


async function handleLogin(req, res) {
    const { email, password } = req.body
    if (!email && !password) return res.status(400).json({
        error: "Email or password are missing"
    })

    const entry = await USER.findOne({
        email,
        password
    })
    // console.log(entry, "entry")
    // return res.send(entry)
    const sessionId = uuidv4()
    setUser(sessionId,entry)
    res.cookie("uuid",sessionId)

    return res.redirect("/api/v1/shorterurl/login")

}




module.exports = { handleSignUP, handleLogin }