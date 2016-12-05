const express = require('express');
const path = require('path');

const app = express();
app.enable('trust proxy');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
})

app.get('/whoami', (req, res) => {
  let result = {};
  result.ipaddress = req.ip;
  result.language = req.headers['accept-language'].split(',')[0];
  result.software = req.headers['user-agent'].match(/\(([^)]+)\)/)[1];
  res.json(result);

})

app.listen(8080, () => console.log('running on port 8080'));

module.exports = app;
