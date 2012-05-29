#import('Collections.Comics.dart', prefix: 'Collections');
#import('Views.Comics.dart', prefix: 'Views');
#import('Views.AddComic.dart', prefix: 'Views');

#import('dart:html');
#import('dart:json');

#import('package:hipster-mvc/HipsterSync.dart');

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
    var json =  window.localStorage.getItem(model.url),
        data = (json == null) ? {} : JSON.parse(json);

    completer.complete(data.getValues());
  }

  if (method == 'create') {
    var collection = model.collection,
        attrs = model.attributes;

    if (attrs['id'] == null) {
      attrs['id'] = "${attrs['title']}:::${attrs['author']}".hashCode();
    }
    print(attrs);

    collection.create(attrs);

    var id = attrs['id'];
    collection.data[id] = attrs;
    window.localStorage.setItem(collection.url, JSON.stringify(collection.data));
  }

  return completer.future;
}
