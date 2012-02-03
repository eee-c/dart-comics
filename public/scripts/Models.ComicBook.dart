#library('Model class describing a comic book');

#import('dart:html');
#import('dart:htmlimpl');
#import('dart:json');

class ComicBook {
  var get attributes;
  var get on;

  ComicBook(this.attributes) {
    on = new ModelEvents();
  }

  operator [](attr) {
    return attributes[attr];
  }

  save([callback]) {
    var req = new XMLHttpRequest()
      , json = JSON.stringify(attributes);

    req.on.load.add((event) {
      print("[save] ${req.responseText}");
      on.save.dispatch(event);
      if (callback != null) callback(event);
    });

    print("[save] $json");
    req.open('post', '/comics', true);
    req.setRequestHeader('Content-type', 'application/json');
    req.send(json);
  }

  delete([callback]) {
    var req = new XMLHttpRequest();

    req.on.load.add((event) {
      print("[delete] success");
      on.delete.dispatch(event);
      if (callback != null) callback(event);
    });

    req.open('delete', "/comics/${attributes['id']}", true);
    req.send();
  }
}

class ModelEvents implements Events {
  var load_list;
  var save_list;
  var delete_list;

  ModelEvents() {
    load_list = new ModelEventList();
    save_list = new ModelEventList();
    delete_list = new ModelEventList();
  }

  get load() { return load_list; }
  get save() { return save_list; }
  get delete() { return delete_list; }
}

class ModelEventList implements EventListenerList {
  var listeners;

  ModelEventList() {
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
