library hipster_model;

import 'dart:html';
import 'dart:json';

class HipsterModel {
  var attributes;
  var on = new ModelEvents();
  var collection;

  HipsterModel(this.attributes);

  static String hash() {
    return (new Date.now()).value.hashCode().toRadixString(16);
  }

  operator [](attr) {
    return attributes[attr];
  }

  get urlRoot { return ""; }

  save({callback}) {
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

  delete({callback}) {
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

  get load { return load_list; }
  get save { return save_list; }
  get delete { return delete_list; }
}

class ModelEventList implements EventListenerList {
  var listeners;

  ModelEventList() {
    listeners = [];
  }

  add(fn, [bool useCapture = false]) {
    listeners.add(fn);
  }

  bool dispatch(Event event) {
    listeners.forEach((fn) {fn(event);});
    return true;
  }
}
