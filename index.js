const express = require('express')
const app = express()
let cors = require('cors');

app
  .use(cors())
  .options('*', cors())
  .listen(3500, '0.0.0.0')

app.get('/', function(req,res) {
  res.sendfile(__dirname + '/index.html');
})


app.use('/', express.static(__dirname + '/dist'))

console.log('App served on http://localhost:3500')