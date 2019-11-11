const express = require('express');
const router = express.Router();
const coinMarketCap = require('coinmarketcap-api');
const { apiKey } = require('../enviroment');

/* GET api listing. */
router.get('/getCryptoCurrencyDetails/:currencyCode/:cryptoCurrencySymbol', (req, res) => {
    const client = new coinMarketCap(apiKey)

    client.getQuotes({ symbol: [req.params.cryptoCurrencySymbol], convert: req.params.currencyCode }).then(response => {
        if (response && response.data && response.data[req.params.cryptoCurrencySymbol]) {
            let responseData = response.data[req.params.cryptoCurrencySymbol];
            let data = {
                name: responseData.name,
                rank: responseData.cmc_rank,
                symbol: responseData.symbol,
                price: responseData.quote[req.params.currencyCode].price,
                change1h: responseData.quote[req.params.currencyCode].percent_change_1h,
                change24h: responseData.quote[req.params.currencyCode].percent_change_24h,
                change7d: responseData.quote[req.params.currencyCode].percent_change_7d,
                volume24h: responseData.quote[req.params.currencyCode].volume_24h,
                marketCap: responseData.quote[req.params.currencyCode].market_cap,
                totalSupply: responseData.total_supply,
                maxSupply: responseData.max_supply
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