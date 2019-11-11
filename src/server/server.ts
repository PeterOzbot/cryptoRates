import * as express from "express";

// Create a new express application instance
const app: express.Application = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(4300, function () {
    console.log('Example app listening on port 3000!');
});