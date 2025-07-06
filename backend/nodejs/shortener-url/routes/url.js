const express = require('express')


// controllers
const {handleGenerateNewShortURL,handleGetAnlytic} = require('../controllers/url')
 
const router = express.Router();


router.post('/url',handleGenerateNewShortURL)
router.get('/url/analytic/:id',handleGetAnlytic)

module.exports = router


