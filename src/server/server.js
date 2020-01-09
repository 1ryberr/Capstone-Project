const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv')


dotenv.config();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('dist'));
const apiKey = `${process.env.API_KEY}`

let data  = [];

const getData = (req, res) => {

	if (!data) {
      throw Error("Doesnt work")
    }
      
      res.json(data);
   
  }
  
  app.get('/jokes/random', (req, res) => {
    request(
      { url: 'https://joke-api-strict-cors.appspot.com/jokes/random' },
      (error, response, body) => {
        if (error || response.statusCode !== 200) {
          return res.status(500).json({ type: 'error', message: err.message });
        }
  
        res.json(JSON.parse(body));
      }
    )
  });

app.get('/', function (req, res) {
  res.sendFile(path.resolve('dist','index.html'));
});

app.listen(4000, function () { console.log('Logged on') });

