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

const albumInformation = async (req, res) => {
  try {
    axios.get(`https://api.discogs.com/masters/${req.params.masterId}`, {
      headers: {
        'Authorization': `Discogs token=${process.env.DISCOGS_TOKEN}`
      }
    })
      .then(response => {
        const genres = response.data.genres;
        const styles = response.data.styles;
        const year = response.data.year;
        const video = response.data.videos[0].uri;
        const tracklist = response.data.tracklist.map((track) => {
          return `${track.title} (${track.duration})`
        });

        return { genres, styles, year, tracklist, video };
      })
      .then(transformed => {
        res.json(transformed);
      })
      .catch(() => {
        return res.json({ error: "error finding album information" });

      })
  } catch (error) {
    return res.json({ error: "error finding album information" });

  }
};


module.exports = {
  fetchAlbums,
  albumInformation
}