const express = require('express');
const app = express();
var cors = require('cors');
const port = 8080 || process.env.PORT;
const Web3 = require('web3');
const truffle_connect = require('./connection/app.js');
const bodyParser = require('body-parser');
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//app.use('/', express.static('public_static'));

app.post('/log', (req, res) => {
  console.log('**** POST /log ****');
  console.log(req.body);
  let message = req.body.message;
  console.log(message);
  truffle_connect
    .logMessage(message)
    .then(function (e) {
      res.send('DONE');
    })
    .catch(function (e) {
      console.log(e);
      res.send('FAILURE');
    });
});

app.get('/getLog', (req, res) => {
  console.log('**** GET /getLog ****');
  console.log(req.body);
  truffle_connect
    .getLog()
    .then(function (e) {
      res.send(e);
    })
    .catch(function (e) {
      console.log(e);
      res.send('FAILURE');
    });
});

app.listen(port, () => {
  // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
  truffle_connect.web3 = new Web3(
    new Web3.providers.HttpProvider('http://127.0.0.1:9545')
  );

  console.log('Express Listening at http://localhost:' + port);
});
