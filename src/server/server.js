const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('dist'));

let data  = [];
  const postedData = (req, res, next) => {
    const {destination, summary,wikiURL, departureDate, imageURL, typicalWeather} =  req.body;

    const newPost = {
    destination: destination,
    wikiURL:wikiURL,
    summary: summary,
    departureDate: departureDate,
    imageURL: imageURL,
    typicalWeather: typicalWeather,
    }

     data.unshift(newPost);

    if (data.length > 5){
       data.pop();	
    }
    res.status(201).json({data: newPost});
    }
    

app.post('/',postedData);
app.get('/data', function (req, res) {
  res.json(data);
});
const port = 4000;
app.listen(port, function () { console.log(`Logged onto port ${port}`) });

