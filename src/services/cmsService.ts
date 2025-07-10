import axios from 'axios';

const cmsApi = axios.create({
  baseURL: 'https://elismar13.github.io/portfolio',
});

export const fetchExperience = async () => {
  const response = await cmsApi.get('/experience.json');
  return response.data;
};

export const fetchMyProjects = async () => {
  const response = await cmsApi.get('/projects.json');
  return response.data;
};
