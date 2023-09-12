require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require("../models/UserModel");
const Album = require("../models/AlbumModel");

const register = async (req, res) => {
  try {
    const username = req.body.username;

    if (!username) {
      return res.json({
        error: 'name is required'
      })
    }

    const exist = await User.findOne({ username });

    if (exist) {
      return res.json({
        error: 'username is taken already'
      })
    }

    const user = await User.create({ username })
    res.json(user);
  } catch (error) {
    console.log('error', error.message)
    res.json({ mssg: " failed register" })
  }
};

const login = async (req, res) => {
  try {
    const username = req.body.username;

    const user = await User.findOne({ username })

    if (!user) {
      return res.status(404).send({ message: "Invalid credentials, please try again." });
    }

    let token = jwt.sign({ username: user.username }, process.env.JWT_SECRET_KEY, { expiresIn: 60 * 10 }); // 10 minute
    res.cookie("token", token)
    res.json(user.username);
  } catch (error) {
    return res.status(404).send({ message: "Invalid credentials, please try again." });
  }
};

const recent = async (req, res) => {
  try {
    const recentAlbums = await Album.find().sort({ createdAt: -1 }).limit(10);
    res.status(200).json(recentAlbums);
  } catch (error) {
    res.json({ mssg: "failed to retrieve recent albums" })
  }
}

const userAlbums = async (req, res) => {
  try {
    const { username } = req.params;
    const userAlbums = await Album.find({ username })
    res.status(200).json(userAlbums);
  } catch (error) {
    res.json({ mssg: "failed to retrieve user's albums" })
  }
}

module.exports = {
  register,
  login,
  recent,
  userAlbums
}