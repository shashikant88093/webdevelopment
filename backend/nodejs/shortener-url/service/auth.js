const jwt = require("jsonwebtoken")
const secert = "Shashikant@123";
// const sessionIdToUserMap = new Map();

function setUser(user) {
    try {
        return jwt.sign(
            {
                _id: user?._id,
                email: user.email,
                role: user.role || "NORMAL",
            },
            secert
        );
    } catch (error) {
        console.error("Error signing JWT:", error);
        return null;
    }
}

function getUser(token) {
    // console.log(token,"token___________________")
    try {
        if (!token) return null;
        // Remove 'Bearer ' prefix if present
        if (token.startsWith("Bearer ")) {
            token = token.slice(7).trim();
        }
        return jwt.verify(token, secert);
    } catch (error) {
        console.error("Error verifying JWT:", error);
        return null;
    }
}


module.exports = { setUser, getUser };