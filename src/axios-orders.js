import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-11973.firebaseio.com/'
});

export default instance;
