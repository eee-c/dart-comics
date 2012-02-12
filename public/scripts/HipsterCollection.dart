#library('Base class for Collections');

#import('dart:html');
#import('dart:htmlimpl');
#import('dart:json');

#import('HipsterModel.dart');

class HipsterCollection implements Collection<HipsterModel> {
  var on;
  List<HipsterModel> models;

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
    var req = new XMLHttpRequest();

    req.on.load.add(_handleOnLoad);
    req.open('get', url, true);
    req.send();
  }

  create(attrs) {
    var new_model = modelMaker(attrs);
    new_model.save(callback:(event) {
      this.add(new_model);
    });
  }

  add(model) {
    models.add(model);
    on.add.
      dispatch(new CollectionEvent('add', this, model:model));
  }

  _handleOnLoad(event) {
    var request = event.target
      , list = JSON.parse(request.responseText);

    list.forEach((attrs) {
      models.add(modelMaker(attrs));
    });

    on.load.dispatch(new CollectionEvent('load', this));
  }
}

class CollectionEvent implements Event {
  var _type, collection, _model;
  CollectionEvent(this._type, this.collection, [model]) {
    _model = model;
  }
  String get type() {
    return _type;
  }
  HipsterModel get model() {
    return _model;
  }
}

class CollectionEvents implements Events {
  var load_list, add_to_list;

  CollectionEvents() {
    load_list = new CollectionEventList();
    add_to_list = new CollectionEventList();
  }

  get load() { return load_list; }
  get add() { return add_to_list; }
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
