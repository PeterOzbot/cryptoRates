const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/getCryptoCurrency/:currencyCode', (req, res) => {

    const rp = require('request-promise');
    const requestOptions = {
        method: 'GET',
        uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
        qs: {
            'start': '1',
            'limit': '100',
            'convert': req.params.currencyCode,
            'sort': 'market_cap'
        },
        headers: {
            'X-CMC_PRO_API_KEY': '0770e4c5-9653-44a4-87d9-c27dce85268f'
        },
        json: true,
        gzip: true
    };

    rp(requestOptions).then(response => {
        if (response && response.data && response.data.length > 0) {
            let data = response.data.map(i => {
                return {
                    name: i.name,
                    rank: i.cmc_rank,
                    symbol: i.symbol,
                    price: i.quote[req.params.currencyCode].price,
                    change1h: i.quote[req.params.currencyCode].percent_change_1h,
                    change24h: i.quote[req.params.currencyCode].percent_change_24h,
                    change7d: i.quote[req.params.currencyCode].percent_change_7d,
                    volume24h: i.quote[req.params.currencyCode].volume_24h,
                    marketCap: i.quote[req.params.currencyCode].market_cap,
                    totalSupply: i.total_supply,
                    maxSupply: i.max_supply
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