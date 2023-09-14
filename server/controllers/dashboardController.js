require('dotenv').config();
const Album = require("../models/AlbumModel");
const jwt = require('jsonwebtoken')

const addAlbum = async (req, res) => {
  try {
    const token = req.cookies.token;
    const { username } = await jwt.verify(token, process.env.JWT_SECRET_KEY);
    const { title, artist, cover, master_id } = req.body;

    const exist = await Album.findOne({ username, master_id });
    if (exist) {
      return res.json({ error: "you already have this album in your profile" })
    }

    const album = await Album.create({ title, artist, cover, username, master_id });
    res.json(album)
  } catch (error) {
    res.json({ mssg: " failed to add album" })
  }
};

const getAlbums = async (req, res) => {
  try {
    let query = req.query.sortedBy;
    const token = req.cookies.token;

    const { username } = await jwt.verify(token, process.env.JWT_SECRET_KEY);

    let albums;
    if (query === 'titleAsc') {
      albums = await Album.find({ username }).sort({ title: 1 });
      res.json(albums);
    } else if (query === 'titleDsc') {
      albums = await Album.find({ username }).sort({ title: -1 });
      res.json(albums);
    } else if (query === 'addedDsc') {
      albums = await Album.find({ username }).sort({ createdAt: -1 });
      res.json(albums);
    } else {
      albums = await Album.find({ username });
      res.json(albums);
    }

  } catch (error) {
    res.json({ mssg: "failed to get albums" })
  }
};

const deleteAlbum = async (req, res) => {
  try {
    const _id = req.params.albumId;
    const token = req.cookies.token;
    const { username } = await jwt.verify(token, process.env.JWT_SECRET_KEY);

    const albumRemoved = await Album.findOneAndDelete({ username, _id });
    res.json(albumRemoved);
  } catch (error) {
    res.json({ mssg: "failed to remove albums" });
  }
}

module.exports = {
  addAlbum,
  getAlbums,
  deleteAlbum
}