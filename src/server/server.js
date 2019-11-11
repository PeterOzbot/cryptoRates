// lib/app.ts
var express = require('express');
var cors = require('cors')
const http = require('http');

var app = express();

// Enable CORS
app.use(cors());

// Get our API routes
const getCryptoCurrency = require('./api/get-crypto-currency');
const getCryptoCurrencyDetails = require('./api/get-crypto-currency-details');
const getCryptoCurrencyBtcPrice = require('./api/get-crypto-currency-btc-price');

// Set our api routes
app.use('/api', getCryptoCurrency);
app.use('/api', getCryptoCurrencyDetails);
app.use('/api', getCryptoCurrencyBtcPrice);

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