// import model
require('dotenv').config();
const axios = require('axios');

// export functions to routes
const fetchAlbums = async (req, res) => {
  try {
    const albumTitle = req.body.albumTitle || '';
    const artist = req.body.artist || '';
    const perPage = req.body.perPage || 10;

    axios.get(`https://api.discogs.com/database/search?type=master&format=album&per_page=${perPage}&page=1&release_title=${albumTitle}&artist=${artist}`, {
      headers: {
        'Authorization': `Discogs token=${process.env.DISCOGS_TOKEN}`
      }
    })
      .then(response => {
        res.json(response.data.results);
      })
  } catch (error) {
    console.log('error', error.message)
    res.json({ mssg: " failed albums" })
  }
};

module.exports = {
  fetchAlbums
}