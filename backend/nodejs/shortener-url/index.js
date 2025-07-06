const express = require("express");
const bodyParser = require('body-parser')
const { nanoid } = require('nanoid')
const urlRoute = require("./routes/url");
const connectToMongoose = require('./DB/connect')
const staticRoute = require("./routes/StaticRoute")
const URL = require("./models/url") // Make sure this points to your URL model



const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// set the view engine

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views'); // Ensure views directory is set

// env access
require("dotenv").config()
const PORT = 8000;

// connect MongoDb function
connectToMongoose(process.env.MONGODBURL)
// Health check route
app.get("/api/v1/shorterurl/test", (req, res) => {
    res.end("I am alive")
});

app.use("/api/v1/shorterurl",staticRoute)

// URL routes
app.use("/api/v1/shorterurl", urlRoute);
// get short URL by ID
app.get("/api/v1/shorterurl/url/:id", async (req, res) => {
    const shortId = req.params.id;
    console.log(shortId, "id")
    const entry = await URL.findOneAndUpdate(
        { shortId },
        {
            $push: {
                visitHistory: {
                    timestamp: new Date()
                }
            }
        },
        { new: true }
    );

    if (!entry) {
        return res.status(404).json({ error: "Short URL not found" });
    }
    console.log(entry, "entey")
    res.redirect(entry.redirectURL);
})
// analyatic 
// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: "Not Found" });
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});