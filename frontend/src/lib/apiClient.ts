import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchProjects = async () => {
  try {
    const response = await apiClient.get('/projects');
    return response.data.projects;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};

export const fetchServices = async () => {
  try {
    const response = await apiClient.get('/services');
    return response.data.services;
  } catch (error) {
    console.error('Error fetching services:', error);
    throw error;
  }
};
