const express = require('express');
const parser = require('body-parser');
const server = express();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

server.use(parser.json());
server.use(express.static('client/build'));
server.use(parser.urlencoded({extended: true}));

server.use(express.static('client/build'));

MongoClient.connect('mongodb://localhost:27017', function (err, client) {
  if (err) {
    console.log(err);
    return;
  }

  const db = client.db('bucket_list');
  console.log('Connected to database');

  server.listen(3000, function () {
    console.log('App running on port '+ this.address().port);
  });


});
