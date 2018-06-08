require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const crypto = require('crypto');


//To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }))
//To parse json data
app.use(bodyParser.json());
const SIGNATURE = 'x-hub-signature';

function verifyPostData(req, res, next){
  const payload = JSON.stringify(req.body)

  if(!payload){
    return next('Request body empty')
  }

  const hmac = crypto.createHmac('sha1',process.env.GITHUB_SECRET);
  const digest = 'sha1=' + hmac.update(payload).digest('hex');

  const checksum = req.headers[SIGNATURE];
  
  if(!checksum || !digest || checksum !== digest){
    return next(`Request body digest (${digest}) didnot match ${SIGNATURE} (${checksum})`)
  }

  return next();
}


app.post('/payload', verifyPostData, (req, res) => {
    res.status(200).send('done')
});

app.use((err, req, res, next) => {
  res.status(403).send(err);
})

const PORT = process.env.PORT || 5002
app.listen(PORT);
