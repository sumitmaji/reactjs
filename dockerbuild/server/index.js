require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const crypto = require('crypto');
const shell = require('shelljs')

//To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }))
//To parse json data
app.use(bodyParser.json());

app.post('/process', (req, res, next) => {
    try{
      console.log(req.body)
      var url = req.payload.repository.owner.html_url
      console.log(url)
      //shell.exec(`../scripts/build.sh -r ${rep} -u ${url}`)
      res.status(200).send('done');
    }catch(err){
        next(err);
    }
});


app.use((err, req, res, next) => {
  console.log(err)
  res.status(403).send(err);
})

const PORT = process.env.PORT || 5002
app.listen(PORT);
console.log(`Running on ${PORT}`);
