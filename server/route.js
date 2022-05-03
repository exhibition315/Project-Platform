const path = require('path');

const getProject = require('./mock/getProject.json');
const getProjectDetail = require('./mock/getProjectDetail.json');
const getProjects = require('./mock/getProjects.json');

module.exports = (app) => {
  app.get('/api/get-project/*', (req, res) => {
    console.log('Get Project');
    res.send(getProject);
  });

  app.get('/api/get-project-detail/*', (req, res) => {
    console.log('Get Project Detail');
    res.send(getProjectDetail);
  });

  app.get('/api/get-projects', (req, res) => {
    console.log('Get Projects');
    res.send(getProjects);
  });

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
  });
};
