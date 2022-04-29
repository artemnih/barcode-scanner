const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// app.all('/', function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   next();
// });

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/get', (req, res) => {
  fs.readFile('data.txt', 'utf8', function (err, data) {
    if (err) throw err;

    const dataArray = data.split('\n').filter(Boolean);
    const dataObject = dataArray.map(line => {
      const lineArray = line.split(' ');
      return {
        user: lineArray[0],
        item: lineArray[1]
      }
    });

    res.send(dataObject);
  });
})

app.post('/set', (req, res) => {
  console.log('got body', req.body);
  fs.appendFile('data.txt', `${req.body.user} ${req.body.item}\n`, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });

  res.send('ok');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})