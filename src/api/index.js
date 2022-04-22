import requests from '@api/base';

const fetcher = {
  get: (url, payload) => requests.get(url, payload).then((data) => data.content),
};

const api = {
  getProjects: '/get-projects',
};

export { api, fetcher };
