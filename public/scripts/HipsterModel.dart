#library('Base class for Models');

#import('dart:html');
#import('dart:htmlimpl');
#import('dart:json');

class HipsterModel implements Hashable {
  var attributes, on, collection;

  HipsterModel(this.attributes) {
    on = new ModelEvents();
  }

  static String hash() {
    return (new Date.now()).value.hashCode().toRadixString(16);
  }

  operator [](attr) {
    return attributes[attr];
  }

  get urlRoot() { return ""; }

  bool useLocal() => true;

  noSuchMethod(name, args) {
    if (name != 'save') {
      throw new NoSuchMethodException(this, name, args);
    }

    if (useLocal()) {
      _localSave(callback: args[0]);
    }
    else {
      _ajaxSave(callback: args[0]);
    }
  }

  _ajaxSave([callback]) {
    var req = new XMLHttpRequest()
      , json = JSON.stringify(attributes);

    req.on.load.add((event) {
      attributes = JSON.parse(req.responseText);
      on.save.dispatch(event);
      if (callback != null) callback(event);
    });

    req.open('post', '/comics', true);
    req.setRequestHeader('Content-type', 'application/json');
    req.send(json);
  }

  _localSave([callback]) {
    var id, event;

    if (attributes['id'] == null) {
      attributes['id'] = hash();
    }

    id = attributes['id'];
    collection.data[id] = attributes;
    window.localStorage.setItem(collection.url, JSON.stringify(collection.data));

    event = new Event("Save");
    on.save.dispatch(event);
    if (callback != null) callback(event);
  }

  delete([callback]) {
    collection.data.remove(attributes['id']);
    window.localStorage.setItem(collection.url, JSON.stringify(collection.data));

    var event = new Event("Delete");
    on.delete.dispatch(event);
    if (callback != null) callback(event);
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
