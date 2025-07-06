const express = require('express')
const router = express.Router();

const {handleGenerateNewShortURL,handleGetAnlytic} = require('../controllers/url')

async function handleViewsInputUrl(req,res){

     res.render('pages/index');

}


router.get("/inputfield",handleViewsInputUrl)

module.exports = router
