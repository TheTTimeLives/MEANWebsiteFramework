// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Get our API routes
const api = require('./server/routes/api');
const mailer = require('./server/routes/mail');
var db = require("./models");
//get our database



const app = express();


//require our controllers ... which should just have our routes in them?

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist/WebsiteFramework')));

require('./controller/routes/htmlroutes.js')(app);
require('./controller/routes/apiroutes.js')(app);

// // // Set our api routes
// app.use('/api', api);
// app.use('/mail', mailer);

// Catch all other routes and return the index file, we'll break these out more later
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/WebsiteFramework/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces. Use sequelize sync to keep db current and synced
 */
db.sequelize.sync().then(function () {
  server.listen(port, () => console.log(`API running on localhost:${port}`));
});