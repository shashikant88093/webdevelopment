const { nanoid } = require('nanoid');
const URL = require('../models/url');


async function handleGenerateNewShortURL(req, res) {
    const body = req.body;
    console.log(body, "body")
    if (!body.url) return res.status(400).json({
        error: "url is required"
    });
    const shortID = nanoid(8);

    const newUrl = await URL.create({
        shortId: shortID,
        redirectURL: body.url,
        visitHistory: []
    });

    if (!newUrl) {
        return res.status(500).json({ error: "Failed to store URL in database" });
    }

    return res.render("pages/index.ejs", { id: shortID, stored: true });
}

async function handleGetAnlytic(req, res) {
    const body = req.params
    console.log(body, "body")
    if (!body.id) return res.status(400).json({
        error: "ID is not found"
    })

    const analytic = await URL.findOne({
        shortId: body.id
    })

    console.log(analytic, 'analytic')
    res.send({
        totalClick: analytic.visitHistory.length,
        Analytic: analytic.visitHistory
    })
}

module.exports = { handleGenerateNewShortURL, handleGetAnlytic }