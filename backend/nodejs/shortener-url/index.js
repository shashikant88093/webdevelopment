const express = require("express");
const urlRoute = require("./routes/url");
const connectToMongoose = require('./DB/connect')


const app = express();

app.use(express.json())

// env access
require("dotenv").config()
const PORT = 8000;

// connect MongoDb function
connectToMongoose(process.env.MONGODBURL)
// Health check route
app.get("/api/v1/shorterurl/test", (_, res) => {
    res.send("I am alive!");
});

// URL routes
app.use("/api/v1/shorterurl", urlRoute);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});