import 'Collections.Comics.dart' as Collections;
import 'Views.Comics.dart' as Views;
import 'Views.AddComic.dart' as Views;

#import('dart:html');
#import('dart:json');

#import('HipsterSync.dart');

main() {
  // HipsterSync.sync = local_sync;

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

local_sync(method, model, [options]) {
  print("[local_sync] $method");

  if (method == 'get') {
    var json =  window.localStorage.getItem(model.url),
      data = (json == null) ? {} : JSON.parse(json);

    if (options is Map && options.containsKey('onLoad')) {
      options['onLoad'](data.getValues());
    }
  }
}
