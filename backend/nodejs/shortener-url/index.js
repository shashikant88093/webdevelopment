const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const {connectToMongoDB}  = require("./DB/connect");
const { checkForAuthenticaation ,restrictTo} = require("./middleware/auth");
const URL = require("./models/url");

const urlRoute = require("./routes/url");
const staticRoute = require("./routes/StaticRoute");
const userRoute = require("./routes/user");

const app = express();
const PORT = 8000;

connectToMongoDB(process.env.MONGODBURL ?? "mongodb://localhost:27017/short-url")

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/url",restrictTo(["NORMAL","ADMIN"]) ,urlRoute);
app.use("/user", userRoute);
app.use("/", staticRoute);

app.use(checkForAuthenticaation);


app.get("/url/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
});

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));