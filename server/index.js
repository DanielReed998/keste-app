// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');

// Get our API routes
const api = require('./api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Enable cross-domain requests
app.use(cors());

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);

// All other routes serve the index.html file
app.get('*', (req, res, next) => {
  res.redirect('../dist/index.html');
}) 

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
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));

//error-handling endware
app.use((err, req, res, next) => {
  res.status(500);
  res.render('error', {error: err});
})