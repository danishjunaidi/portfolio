import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
});

export const projects = {
  getAll: () => API.get('/projects'),
  getOne: (id) => API.get(`/projects/${id}`),
};

export const contact = {
  sendMessage: (data) => API.post('/contact', data),
};

export const blog = {
  getAll: () => API.get('/blogs'),
};

export default API;
