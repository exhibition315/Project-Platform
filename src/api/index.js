import requests from '@api/base';

const apis = {
  getProjects: (payload) => requests.get('/get-projects', payload),
};

export default apis;
