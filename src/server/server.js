const express = require('express');
const app = express();
const cors = require('cors');
const AYLIENTextAPI = require('aylien_textapi');
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv');


dotenv.config();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('dist'));



let textapi = new AYLIENTextAPI({
  application_id:  `${process.env.API_ID}` ,
  application_key: `${process.env.API_KEY}`
});

  
let data  = [];

const getData = (req, res) => {

	if (!data) {
      throw Error("Doesnt work")
    }
      
      res.json(data);
   
	}

const mypost = (req, res, next) => {
const urls  =  req.body;
    textapi.sentiment({
      'text': `${urls.url}`
    }, function(error, response) {
      if (error === null) {
        data.unshift(response);
        if (data.length > 5){
          data.pop();
          console.log(data);	
        }
        res.status(201).json({data: data});
      }else {
        console.log(error);
      }
    });
}

app.get('/data', getData);
app.post('/', mypost);
app.get('/', function (req, res) {


  res.sendFile(path.resolve('dist','index.html'));
});

app.listen(3000, function () { console.log('Logged on') });

