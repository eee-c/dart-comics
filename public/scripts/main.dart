#import('Collections.Comics.dart', prefix: 'Collections');
#import('Views.Comics.dart', prefix: 'ViewsFIXME01');
#import('Views.AddComic.dart', prefix: 'ViewsFIXME02');

#import('dart:html');
#import('dart:json');

#import('HipsterSync.dart');

main() {
  // HipsterSync.sync = local_sync;

  var my_comics_collection = new Collections.Comics()
    , comics_view = new ViewsFIXME01.Comics(
        el:'#comics-list',
        collection: my_comics_collection
      );

  my_comics_collection.fetch();

  new ViewsFIXME02.AddComic(
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
