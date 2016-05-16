'use strict';

const express = require('express');
const mysql = require('mysql');
const winston = require('winston');

const app = express();

app.set('port', 5000);
app.use(express.static(__dirname + '/public'));

//winston setting
var logger = new (winston.Logger)({
    transports: [
      new (winston.transports.Console)({
      level: 'silly', // level は silly 以上
      colorize: true, // 色付き
      timestamp: true // 時間つき
    }),
      new (winston.transports.File)({
      filename: '/var/log/node_app/node_app.log',
      json: false
    })
    ]
});

app.get('/', function(request, response) {

  logger.silly('ばかばかしいこと');
  logger.debug('とてもどうでもいいこと');
  logger.verbose('どうでもいいこと');
  logger.info('じょうほう');
  logger.warn('やばい');
  logger.error('すごくやばい!!');

  response.send('Hello World!!!!!');
});

app.get('/mysql', function(request, response) {

  var connection = mysql.createConnection({
    host     : 'mysql',
    port     : '3306',
    user     : 'root',
    password : 'root',
    database : 'node_app'
  });

  connection.connect(function(err){
    if(!err) {
        logger.info("Database is connected ...");
    } else {
        logger.error(err);
        return;
    }
    return;
  });

});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});

