import { apiClient } from './apiClient';

export const userService = {
  register: (data) => apiClient('/api/users/register', { method: 'POST', body: JSON.stringify(data) }),
  login: (data) => apiClient('/api/users/login', { method: 'POST', body: JSON.stringify(data) }),
  getProfile: () => apiClient('/api/users/profile'),
};