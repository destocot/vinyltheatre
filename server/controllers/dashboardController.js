require('dotenv').config();
const Album = require("../models/AlbumModel");
const jwt = require('jsonwebtoken')

const addAlbum = async (req, res) => {
  try {
    const token = req.cookies.token;
    const { username } = await jwt.verify(token, process.env.JWT_SECRET_KEY);

    const { title, artist, cover } = req.body;

    const album = await Album.create({ title, artist, cover, username });
    res.json(album)
  } catch (error) {
    res.json({ mssg: " failed to add album" })
  }
};

const getAlbums = async (req, res) => {
  try {
    const token = req.cookies.token;
    const { username } = await jwt.verify(token, process.env.JWT_SECRET_KEY);

    const albums = await Album.find({ username });
    res.json(albums);
  } catch (error) {
    res.json({ mssg: " failed to get albums" })
  }
};

module.exports = {
  addAlbum,
  getAlbums
}