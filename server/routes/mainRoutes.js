const express = require('express');
const { register, login, recent, userAlbums } = require('../controllers/mainController');
const router = express.Router();

router.get('/', (req, res) => {
  res.json("VinylTheatre");
})

router.post('/register', register);
router.post('/login', login);

router.get('/recent', recent);
router.get('/user/:username', userAlbums);

router.get('/logout', (req, res) => {
  res.clearCookie("token");
  res.status(200).send();
});


module.exports = router;