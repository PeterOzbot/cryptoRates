// lib/app.ts
var express = require('express');
var cors = require('cors')
const http = require('http');

var app = express();

// Enable CORS
app.use(cors());

// Get our API routes
const api = require('./api/get-rates-api');

// Set our api routes
app.use('/api', api);

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '4000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));