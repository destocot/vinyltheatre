const express = require('express');
const { register, login, recent, userAlbums } = require('../controllers/mainController');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);

router.get('/recent', recent);
router.get('/user/:username', userAlbums);


module.exports = router;