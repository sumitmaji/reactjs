require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const crypto = require('crypto');
const shell = require('shelljs')
const Promise = require('bluebird')

//To parse URL encoded data
app.use(bodyParser.urlencoded({
  extended: false
}))
//To parse json data
app.use(bodyParser.json());

app.post('/process', (req, res, next) => {
  try {

    var url = req.body.repository.owner.html_url;
    var rep = req.body.repository.name;
    console.log(url, rep)
    shell.exec()
    execAsync(`./scripts/build.sh -r ${rep}.git -u ${url}`, {
        silent: true,
        cwd: '.'
      })
      .then(stdout => console.log('Success'))
      .catch(err => console.log(err));
    res.status(200).send('done');
  } catch (err) {
    next(err);
  }
});

function execAsync(cmd, opts = {}) {
  return new Promise(function(resolve, reject) {
    // Execute the command, reject if we exit non-zero (i.e. error)
    shell.exec(cmd, opts, function(code, stdout, stderr) {
      if (code != 0) return reject(new Error(stderr));
      return resolve(stdout);
    });
  });
}


app.use((err, req, res, next) => {
  console.log(err)
  res.status(403).send(err);
})

const PORT = process.env.PORT || 5002
app.listen(PORT);
console.log(`Running on ${PORT}`);
