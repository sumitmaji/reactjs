require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const crypto = require('crypto');


//To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }))
//To parse json data
app.use(bodyParser.json());

app.post('/process', (req, res) => {
    console.log(req.body)
    res.status(200).send('done')
});


app.use((err, req, res, next) => {
  console.log('Error!!!!', err)
  res.status(403).send(err);
})

const PORT = process.env.PORT || 5002
app.listen(PORT);
console.log(`Running on ${PORT}`);
