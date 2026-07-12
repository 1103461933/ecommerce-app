const axios = require('axios');

const USER_SERVICE_URL = process.env.USER_SERVICE_URL || 'http://user-service:8080';

const client = axios.create({ baseURL: USER_SERVICE_URL });

module.exports = {
  register: (data) => client.post('/api/users/register', data).then(res => res.data),
  login: (data) => client.post('/api/users/login', data).then(res => res.data),
  getProfile: (userId) => client.get(`/api/users/profile/${userId}`).then(res => res.data),
};