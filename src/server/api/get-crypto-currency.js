const express = require('express');
const router = express.Router();
const coinMarketCap = require('coinmarketcap-api');
const { apiKey } = require('../enviroment');

/* GET api listing. */
router.get('/getCryptoCurrency/:currencyCode', (req, res) => {
    const client = new coinMarketCap(apiKey);

    client.getTickers({
        'start': '1',
        'limit': '100',
        'convert': req.params.currencyCode,
        'sort': 'market_cap'
    }).then(response => {
        if (response && response.data && response.data.length > 0) {
            let data = response.data.map(i => {
                return {
                    rank: i.cmc_rank,
                    symbol: i.symbol,
                    price: i.quote[req.params.currencyCode].price,
                    change24h: i.quote[req.params.currencyCode].percent_change_24h
                };
            });
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