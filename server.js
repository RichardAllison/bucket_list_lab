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

//CREATE
server.post('/api/bucket_list', function (req, res) {
  const bucketListCollection = db.collection('list');
  const bucketListItem = req.body;
  bucketListCollection.save(bucketListItem, function (err, result) {
    if (err) {
      console.log(err);
      res.status(500);
      res.send();
    }
    res.status(201);
    res.json(result.ops[0]);
    console.log('saved to database');
  });
});

//INDEX
server.get('/api/bucket_list', function (req, res) {
  const bucketListCollection = db.collection('list');
  bucketListCollection.find().toArray(function (err, bucketList) {
    if (err) {
      console.log(err)
      res.status(500);
      res.send();
    }
    res.json(bucketList);
  });
});

  server.listen(3000, function () {
    console.log('App running on port ' + this.address().port);
  });


});
