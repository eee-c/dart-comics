
/**
 * Module dependencies.
 */

var express = require('express')
  , WebSocketServer = require('websocket').server
  , db = require('dirty')('comix.db')
  , dirtyUuid = require('dirty-uuid');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/new', function(req, res){
  res.render('create', { title: 'Dart Comics' });
});

app.get('/comics', function(req, res) {
  res.send(jsonComics);
});

function jsonComics() {
  var list = [];
  db.forEach(function(id, graphic_novel) {
    if (graphic_novel) list.push(graphic_novel);
  });
  return JSON.stringify(list);
}

app.delete('/comics/:id', function(req, res) {
  db.rm(req.params.id);
  res.send('{}');
});

app.post('/comics', function(req, res) {
  var graphic_novel = req.body;
  graphic_novel['id'] = dirtyUuid();

  db.set(graphic_novel['id'], graphic_novel);

  res.statusCode = 201;
  res.send(JSON.stringify(graphic_novel));
});


app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);


// Websockets!

wsServer = new WebSocketServer({
  httpServer: app,
  autoAcceptConnections: false
});

wsServer.on('request', function(request) {
  var connection = request.accept(null, request.origin);
  console.log((new Date()) + ' Connection accepted.');

  connection.on('message', function(message) {
    if (message.type === 'utf8') {
      console.log('Received Message: ' + message.utf8Data);

      connection.sendUTF(jsonComics());
    }
  });

  connection.on('close', function(reasonCode, description) {
    console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
  });
});
