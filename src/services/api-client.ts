import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '2192e7549a37483b83ea0c4a7e16b62e',
  },
});