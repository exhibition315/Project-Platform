const express = require('express');
const path = require('path');
const route = require('./route');

const PORT = process.env.PORT || 8001;
const app = express();

app.use(express.static(path.resolve(__dirname, '../build')));

route(app);

app.listen(PORT, () => {
  console.log(`Server running in ${PORT}`);
});
