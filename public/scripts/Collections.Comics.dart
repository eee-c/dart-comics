#library('Collection class to describe my comic book collection');

#import('dart:html');
#import('dart:htmlimpl');
#import('dart:json');

#import('Models.ComicBook.dart');

class Comics {
  var list;
  var get on;
  var get models;

  Comics() {
    on = new CollectionEvents();
    models = [];
  }

  // Be List-like
  forEach(fn) {
    models.forEach(fn);
  }

  get length() {
    return models.length;
  }

  // Be Backbone like
  operator [](id) {
    var ret;
    forEach((model) {
      if (model['id'] == id) ret = model;
    });
    return ret;
  }

  fetch() {
    var req = new XMLHttpRequest();

    req.on.load.add(_handleOnLoad);
    req.open('get', '/comics', true);
    req.send();
  }

  _handleOnLoad(event) {
    var request = event.target;
    print(request.responseText);
    list = JSON.parse(request.responseText);
    list.forEach((attrs) {
      models.add(new ComicBook(attrs));
    });

    on.load.dispatch(new Event('load'));
  }
}

class CollectionEvents implements Events {
  var load_list;

  CollectionEvents() {
    load_list = new CollectionEventList();
  }

  get load() {
    return load_list;
  }
}

class CollectionEventList implements EventListenerList {
  var listeners;

  CollectionEventList() {
    listeners = [];
  }

  add(fn) {
    listeners.add(fn);
  }

  bool dispatch(Event event) {
    listeners.forEach((fn) {fn(event);});
    return true;
  }
}
