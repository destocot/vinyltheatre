require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require("../models/UserModel");
const Album = require("../models/AlbumModel");
const bcrypt = require('bcrypt');

const register = async (req, res) => {
  return res.json({
    error: 'registration is down, come back after mvp presentations'
  })

  try {
    const { username, email, password } = req.body;

    if (!username) {
      return res.json({
        error: 'name is required'
      })
    }

    if (!email) {
      return res.json({
        error: 'email is required'
      })
    }

    if (!password) {
      return res.json({
        error: 'password is required'
      })
    }

    if (password.length < 8) {
      return res.json({
        error: 'password must be at least 8 characters long'
      })
    }

    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(password, 10);
    } catch (err) {
      return res.json({
        error: 'server error, please try again.'
      })
    };

    const userExists = await User.findOne({ username });
    if (userExists) {
      return res.json({
        error: 'username is already taken'
      })
    }

    const emailExists = await User.findOne({ email });
    if (emailExists) {
      return res.json({
        error: 'email is already taken'
      })
    }


    const user = await User.create({ username, email, password: hashedPassword })
    res.json(user);
  } catch (error) {
    return res.json({
      error: 'registration failed, please try again'
    })
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username })

    if (!user) {
      return res.status(404).send({ message: "Invalid credentials, please try again." });
    }

    let passwordMatches;
    try {
      passwordMatches = await bcrypt.compare(password, user.password);
    } catch (err) {
      return res.json({
        error: 'server error, please try again.'
      })
    };

    if (!passwordMatches) {
      return res.status(404).send({
        message: "invalid credentials please try again"
      })
    }

    let token = jwt.sign({ username: user.username }, process.env.JWT_SECRET_KEY, { expiresIn: 60 * 10 }); // 10 minute
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: 'none',
      secure: true,
    })
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