import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_FIREBASE_FIREBASE_API,
});

export default instance;

// global
// https://us-central1-jc--clone-5b94a.cloudfunctions.net/api

// local
// http://localhost:5001/jc--clone-5b94a/us-central1/api
