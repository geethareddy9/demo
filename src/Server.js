const express = require('express');
const models = require('../models');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.json({ limit: '1mb' }));

//folders id name
//emails id folder_id subject, date description

app.get('/ping', function (req, res) {
 return res.json({msg: 'pong'});
});

app.get('/folders', async function(req, res) {
  const folders = await models.Folders.findAll({ attributes: ['id', 'name'] })
  return res.json({ folders });
});

app.get('/folder/:folderId/subjects', async function(req, res) {
  const subjects = await models.Emails.findAll({ where: { folder_id: req.params.folderId }, attributes: [ 'subject', 'receivedDate', 'description' ]})
  return res.json({ subjects });
});

app.post('/email', async function(req, res) {
  console.log(req.body);
  const email = await models.Emails.create({...req.body, folder_id: 1});
  return res.json({ email })
});


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);