const express = require('express');
const { fetchAlbums } = require('../controllers/discogsController');
const router = express.Router();

router.post('/discogs', fetchAlbums)

module.exports = router;