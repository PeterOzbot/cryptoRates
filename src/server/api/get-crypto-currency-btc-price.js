const express = require('express');
const router = express.Router();
const coinMarketCap = require('coinmarketcap-api');
const { apiKey } = require('../enviroment');

/* GET api listing. */
router.get('/getCryptoCurrencyBtcPrice/:cryptoCurrencySymbol/', (req, res) => {
    const btcSymbol = 'BTC';
    const client = new coinMarketCap(apiKey);

    client.getQuotes({
        symbol: [req.params.cryptoCurrencySymbol], convert: btcSymbol
    }).then(response => {
        if (response && response.data && response.data[req.params.cryptoCurrencySymbol]) {
            let responseData = response.data[req.params.cryptoCurrencySymbol];
            let data = {
                symbol: responseData.symbol,
                btcPrice: responseData.quote[btcSymbol].price
            };
            res.json(data);
        }
        else {
            res.json([]);
        }
    }).catch((err) => {
        console.log('API call error:', err.message);
        res.status(500).send(err.message);
    });

});

module.exports = router;