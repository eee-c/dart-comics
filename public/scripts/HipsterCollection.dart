#library('Base class for Collections');

#import('dart:html');
#import('dart:htmlimpl');
#import('dart:json');

#import('HipsterModel.dart');
#import('HipsterSync.dart');

class HipsterCollection implements Collection {
  CollectionEvents on;
  List<HipsterModel> models;
  Map<String,Map> data;

  HipsterCollection() {
    on = new CollectionEvents();
    models = <HipsterModel>[];
  }

  abstract HipsterModel modelMaker(attrs);
  abstract String get url();

  // Be List-like
  void forEach(fn) {
    models.forEach(fn);
  }

  int get length() {
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
    on.
      insert.
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

class CollectionEvents implements Events {
  CollectionEventList load_listeners, insert_listeners;

  CollectionEvents() {
    load_listeners = new CollectionEventList();
    insert_listeners = new CollectionEventList();
  }

  CollectionEventList get load() => load_listeners;
  CollectionEventList get insert() => insert_listeners;
}

class CollectionEventList implements EventListenerList {
  List listeners;

  CollectionEventList() {
    listeners = [];
  }

  CollectionEventList add(fn) {
    listeners.add(fn);
    return this;
  }

  bool dispatch(CollectionEvent event) {
    listeners.forEach((fn) {fn(event);});
    return true;
  }
}

class CollectionEvent implements Event {
  String _type;
  HipsterCollection collection;
  HipsterModel _model;

  CollectionEvent(this._type, this.collection, [model]) {
    _model = model;
  }

  String get type() =>_type;

  HipsterModel get model() => _model;
}
