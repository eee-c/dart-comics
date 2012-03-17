#import('Collections.Comics.dart', prefix: 'Collections');
#import('Views.Comics.dart', prefix: 'Views');
#import('Views.AddComic.dart', prefix: 'Views');

#import('dart:html');
#import('dart:json');

#import('HipsterSync.dart');

WebSocket ws;

main() {
  HipsterSync.sync = wsSync;
  ws = new WebSocket("ws://localhost:3000/");

  // After open, initialize the app...
  ws.
    on.
    open.
    add((event) {
      var my_comics_collection = new Collections.Comics()
        , comics_view = new Views.Comics(
            el:'#comics-list',
            collection: my_comics_collection
          );

      my_comics_collection.fetch();

      new Views.AddComic(
        el:'#add-comic',
        collection: my_comics_collection
      );
    });
}

wsSync(method, model) {
  final completer = new Completer();

  String message = "$method: ${model.url}";
  if (method == 'delete') message = "$method: ${model.id}";
  if (method == 'create') message = "$method: ${JSON.stringify(model.attributes)}";

  print("sending: $message");
  ws.send(message);

  // Handle messages from the server, completing the completer
  ws.
    on.
    message.
    add(_wsHandler(event) {
      print("The data in the event is: " + event.data);
      completer.complete(JSON.parse(event.data));

      event.target.on.message.remove(_wsHandler);
    });

  return completer.future;
}

localSync(method, model) {
  final completer = new Completer();

  print("[local_sync] $method");

  if (method == 'get') {
    var json =  window.localStorage.getItem(model.url),
        data = (json == null) ? {} : JSON.parse(json);

    completer.complete(data.getValues());
  }

  return completer.future;
}
