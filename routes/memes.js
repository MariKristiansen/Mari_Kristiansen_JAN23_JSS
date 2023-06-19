var express = require('express');
var router = express.Router();
// const { resolve } = require('path');
const axios = require('axios');
require('dotenv').config();

axios.get(process.env.API_URL).then((response) => {
    const memes = response.data.data.memes;

    router.get('/', function (req, res, next) {
        if (!req.user) {
            res.render('memes', { user: null, data: memes });
        } else {
            res.render('memes', { user: req.user, data: memes });
        }
    });
});

module.exports = router;