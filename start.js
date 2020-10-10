const app = require('./app');
const express = require('express'); 
var remote = express();
remote.use(function(req, res, next) {
  res.end('end');
});

const server = app.listen(3000, () => {
  console.log(`Express is running on port ${server.address().port}`);
});