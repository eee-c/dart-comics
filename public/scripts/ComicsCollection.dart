#library('Collection class to describe my comic book collection');

#import('dart:html');
#import('dart:htmlimpl');
#import('dart:json');

class ComicsCollection {
  var list;
  var get on;

  ComicsCollection() {
    on = new CollectionEvents();
  }

  // Be List-like
  forEach(fn) {
    list.forEach(fn);
  }

  get length() {
    return list.length;
  }

  // Be Backbone like
  fetch() {
    var req = new XMLHttpRequest();

    req.on.load.add(_handleOnLoad);
    req.open('get', '/comics', true);
    req.send();
  }

  _handleOnLoad(event) {
    var request = event.target;

    list = JSON.parse(request.responseText);

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
