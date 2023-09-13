require('dotenv').config();
const express = require('express');
const cors = require('cors');
const colors = require('colors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
// origin: "http://localhost:5173",

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors({
  origin: "https://vinyltheatre-mvp.vercel.app",
  methods: ['POST', 'PUT', 'GET', 'DELETE', 'HEAD'],
  credentials: true
}))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://vinyltheatre-mvp.vercel.app');
  next();
});


const mainRouter = require('./routes/mainRoutes');
app.use('/', mainRouter);

const discogsRouter = require('./routes/discogsRoutes');
app.use('/api', discogsRouter);

const dashboardRouter = require('./routes/dashboardRoutes');
app.use('/dashboard', dashboardRouter);

const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB".magenta)
    app.listen(port, () => console.log(`Listening at http://localhost:${port}`.yellow))
  })
  .catch((error) => {
    console.log(error);
  })
