// src/services/api.js
import axios from 'axios';

const API_BASE_URL = 'http://192.168.0.38/hrms_tcerp/';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to include token in headers
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authAPI = {
 login: async (username, password) => {
  try {
    const formData = new URLSearchParams();
    formData.append('username', username);  // Make sure this matches what your API expects
    formData.append('password', password);  // Make sure this matches what your API expects

    const response = await api.post('Users_login', formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
},
  // Add other auth related API calls here
};

export default api;