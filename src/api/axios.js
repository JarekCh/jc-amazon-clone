import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5001/jc--clone-5b94a/us-central1/api',
});

export default instance;
