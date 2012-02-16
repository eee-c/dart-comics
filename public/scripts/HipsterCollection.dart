library hipster_collection;

import 'dart:html';
import 'dart:json';

import 'HipsterModel.dart';
import 'HipsterSync.dart';

class HipsterCollection implements Collection<HipsterModel> {
  var on = new CollectionEvents();
  List<HipsterModel> models = [];
  Map<String,Map> data;

  HipsterModel modelMaker(attrs);
  String get url;

  // Be List-like
  void forEach(fn) {
    models.forEach(fn);
  }

  int get length {
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
    HipsterSync.call('get', this, options: {
      'onLoad': _handleOnLoad
    });
  }

  create(attrs) {
    var new_model = modelMaker(attrs);
    new_model.collection = this;
    new_model.save(callback:(event) {
      this.add(new_model);
    });
  }

  add(model) {
    models.add(model);
    on.add.
      dispatch(new CollectionEvent('add', this, model:model));
  }

  _handleOnLoad(list) {
    list.forEach((attrs) {
      var new_model = modelMaker(attrs);
      new_model.collection = this;
      models.add(new_model);
    });

    on.load.dispatch(new CollectionEvent('load', this));
  }
}

class CollectionEvent implements Event {
  var _type, collection, _model;
  CollectionEvent(this._type, this.collection, {model}) {
    _model = model;
  }
  String get type {
    return _type;
  }
  HipsterModel get model {
    return _model;
  }
}

class CollectionEvents implements Events {
  var load_list, add_to_list;

  CollectionEvents() {
    load_list = new CollectionEventList();
    add_to_list = new CollectionEventList();
  }

  get load { return load_list; }
  get add { return add_to_list; }
}

class CollectionEventList implements EventListenerList {
  var listeners;

  CollectionEventList() {
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
