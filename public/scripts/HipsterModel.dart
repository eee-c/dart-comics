library hipster_model;

import 'dart:html';
import 'dart:json';

class HipsterModel {
  var attributes;
  var on = new ModelEvents();

  HipsterModel(this.attributes);

  operator [](attr) {
    return attributes[attr];
  }

  get urlRoot { return ""; }

  save({callback}) {
    var req = new HttpRequest()
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

  delete({callback}) {
    var req = new HttpRequest();

    req.on.load.add((event) {
      print("[delete] success");
      on.delete.dispatch(event);
      if (callback != null) callback(event);
    });

    req.open('delete', "${urlRoot}/${attributes['id']}", true);
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
