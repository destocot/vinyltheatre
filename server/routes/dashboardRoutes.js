const express = require('express');
const { addAlbum, getAlbums } = require('../controllers/dashboardController');
const requireAuth = require('../middlewares/userAuth');
const router = express.Router();

router.get('/albums', requireAuth, getAlbums);
router.post('/add', requireAuth, addAlbum);

module.exports = router;