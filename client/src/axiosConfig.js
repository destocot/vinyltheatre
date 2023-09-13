// First we need to import axios.js
import axios from 'axios';
// Next we make an 'instance' of it
const instance = axios.create({
  // .. where we make our configurations
  // baseURL: 'http://localhost:5001'
  baseURL: 'https://vinyltheatre-mvp-srvr1.onrender.com'
});

export default instance;