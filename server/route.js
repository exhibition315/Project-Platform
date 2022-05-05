const path = require('path');

const getProject = require('./mock/getProject.json');
const getProjectDetail = require('./mock/getProjectDetail.json');
const getProjects = require('./mock/getProjects.json');

module.exports = (app) => {
  app.get('/api/get-project/*', (req, res) => {
    res.send(getProject);
  });

  app.get('/api/get-project-detail/*', (req, res) => {
    res.send(getProjectDetail);
  });

  app.get('/api/get-projects', (req, res) => {
    res.send(getProjects);
  });

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../dist', 'index.html'));
  });
};
