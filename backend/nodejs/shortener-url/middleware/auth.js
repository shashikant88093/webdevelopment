const { request } = require("express");
const { getUser } = require("../service/auth");


function checkForAuthenticaation(req, res, next) {
    const tokenCookie = req.cookies?.token;
    req.user = null;

    
    if (!tokenCookie) {
        return next();
    }
    const user = getUser(tokenCookie);

    req.user = user;
    return next();
}
// Middleware to restrict access based on user role ['ADMIN', 'MORMAL']
function restrictTo(roles) {
    return (req, res, next) => {
        if (!req.user) return res.redirect("/login");
        if (!roles.includes(req.user.role)) return res.end("Unauthorized");
        return next();
    };
}

module.exports = {
    checkForAuthenticaation,
    restrictTo

}