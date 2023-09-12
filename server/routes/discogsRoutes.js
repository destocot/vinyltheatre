const express = require('express');
const { fetchAlbums, albumInformation } = require('../controllers/discogsController');
const router = express.Router();

router.post('/discogs', fetchAlbums)
router.get('/discogs/information/:masterId', albumInformation);

module.exports = router;