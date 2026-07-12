import { apiClient } from './apiClient';

export const productService = {
  getProducts: () => apiClient('/api/products'),
  getProductById: (id) => apiClient(`/api/products/${id}`),
  createProduct: (data) => apiClient('/api/products', { method: 'POST', body: JSON.stringify(data) }),
  updateProduct: (id, data) => apiClient(`/api/products/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  deleteProduct: (id) => apiClient(`/api/products/${id}`, { method: 'DELETE' }),
};