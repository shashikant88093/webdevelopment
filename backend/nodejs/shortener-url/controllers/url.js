const { nanoid } = require('nanoid');
const URL = require('../models/url');


async function handleGenerateNewShortURL(req, res) {
    const body = req.body;
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

    return res.json({ id: shortID, stored: true });
}

module.exports = { handleGenerateNewShortURL }