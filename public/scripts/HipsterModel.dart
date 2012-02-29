library hipster_model;

import 'dart:html';
import 'dart:json';

import 'HipsterSync.dart';

class HipsterModel implements Hashable {
  Map attributes;
  ModelEvents on = new ModelEvents();
  Collection collection;

  HipsterModel(this.attributes);

  static String hash() {
    return (new Date.now()).value.hashCode().toRadixString(16);
  }

  operator [](attr) => attributes[attr];
  operator |(callback) => save(callback: callback);

  get url => isSaved() ?
      urlRoot : "$urlRoot/${attributes['id']}";

  get urlRoot => (collection == null) ?
    "" : collection.url;

  isSaved() => attributes['id'] == null;

  save({callback}) {
    HipsterSync.call('post', this, options: {
      'onLoad': (attrs) {
        attributes = attrs;

        var event = new ModelEvent('save', this);
        on.load.dispatch(event);
        if (callback != null) callback(event);
      }
    });
  }

  delete({callback}) {
    HipsterSync.call('delete', this, options: {
      'onLoad': (attrs) {
        var event = new ModelEvent('delete', this);
        on.delete.dispatch(event);
        if (callback != null) callback(event);
      }
    });
  }

}

class ModelEvent implements Event {
  var type, model;
  ModelEvent(this.type, this.model);
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
