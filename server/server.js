const express = require('express');
const path = require('path');

const app = express();
app.set('port', (process.env.PORT || 3001));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Answer API requests.
app.get('/api', function (req, res) {
  res.set('Content-Type', 'application/json');
  res.send('{"GBP_AUD":"1.70315","GBP_BTC":"0.000344828","GBP_CAD":"1.66961","GBP_CNY":"8.93783","GBP_EUR":"1.14114","GBP_USD":"1.34820"}');
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
