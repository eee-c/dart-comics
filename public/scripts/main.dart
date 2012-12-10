import 'Collections.Comics.dart' as Collections;
import 'Views.Comics.dart' as Views;
import 'Views.AddComic.dart' as Views;

import 'dart:html';
import 'dart:json';

import 'HipsterSync.dart';

main() {
  HipsterSync.sync = localSync;

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

  if (method == 'get') {
    var json =  window.localStorage[model.url],
        data = (json != null) ? JSON.parse(json) : {};

    model.data = data;

    completer.complete(data.values);
  }

  if (method == 'post') {
    var collection = model.collection,
        attrs = model.attributes;

    if (attrs['id'] == null) {
      attrs['id'] = "${attrs['title']}:::${attrs['author']}".hashCode.toString();
    }

    collection.add(model);

    var id = attrs['id'];

    var json = window.localStorage[collection.url],
        data = (json != null) ? JSON.parse(json) : {};
    data[id] = attrs;
    window.localStorage[collection.url] = JSON.stringify(data);

    completer.complete(model);
  }


  return completer.future;
}
