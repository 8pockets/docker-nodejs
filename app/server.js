'use strict';

const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.set('port', 5000);
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
/*
  mongoose.connect('mongodb://localhost:27017/foo');

  var Cat = mongoose.model('Cat', { name: String });

  var kitty = new Cat({ name: 'Zildjian' });
  kitty.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('meow');
    }
  });
*/
  response.send('Hello World!')
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});
