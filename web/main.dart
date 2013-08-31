import 'package:dart_comics/Collections.Comics.dart' as Collections;
import 'package:dart_comics/Views.Comics.dart' as Views;
import 'package:dart_comics/Views.AddComic.dart' as Views;

import 'dart:html';
import 'package:json/json.dart' as JSON;

import 'package:hipster_mvc/hipster_sync.dart';

main() {
  // HipsterSync.sync = localSync;

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
}

localSync(method, model) {
  final completer = new Completer();

  print("[local_sync] $method");

  if (method == 'read') {
    var json =  window.localStorage[model.url],
        data = (json == null) ? {} : JSON.parse(json);

    completer.complete(data.values);
  }

  if (method == 'create') {
    var collection = model.collection,
        attrs = model.attributes;

    if (attrs['id'] == null) {
      attrs['id'] = "${attrs['title']}:::${attrs['author']}".hashCode;
    }
    print(attrs);

    collection.create(attrs);

    var id = attrs['id'];
    collection.data[id] = attrs;
    window.localStorage[collection.url]  = JSON.stringify(collection.data);
  }

  return completer.future;
}
