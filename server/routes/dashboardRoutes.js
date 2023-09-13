const express = require('express');
const { addAlbum, getAlbums, deleteAlbum } = require('../controllers/dashboardController');
const requireAuth = require('../middlewares/userAuth');
const router = express.Router();

router.get('/albums', requireAuth, getAlbums);
router.post('/add', requireAuth, addAlbum);
router.delete('/delete/:albumId', requireAuth, deleteAlbum);

module.exports = router;
//test