const path = require('path');
const express = require('express');

// process.env.PORT is heroku's assigned port
const PORT = process.env.PORT || 8000;

const app = express();

/**
 *  MIDDLEWARE
 */
app.use(express.static(path.join(__dirname, 'build')));

/**
 *  ROUTES
 */
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

/**
*  START SERVER
*/
app.listen(PORT, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info(`==> 🌎 Backend server listening on port ${PORT}.`);
  }
});
