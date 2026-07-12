const axios = require('axios');

const PRODUCT_SERVICE_URL = process.env.PRODUCT_SERVICE_URL || 'http://product-service:8080';

const client = axios.create({ baseURL: PRODUCT_SERVICE_URL });

module.exports = {
  getProducts: () => client.get('/api/products').then(res => res.data),
  getProductById: (id) => client.get(`/api/products/${id}`).then(res => res.data),
  createProduct: (data) => client.post('/api/products', data).then(res => res.data),
};