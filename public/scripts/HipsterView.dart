library hipster_view;

import 'dart:html';
import 'dart:json';

class HipsterView {
  var model, el, collection;

  HipsterView({this.model, this.el, this.collection}) {
    if (this.el is String) this.el = document.query(this.el);
    print(this.el);
    this.post_initialize();
  }

  void post_initialize() { print("super initialize"); }
  // abstract _initialize();

  // delegate events
  attach_handler(parent, event_selector, callback) {
    var index = event_selector.indexOf(' ')
      , event_type = event_selector.substring(0,index)
      , selector = event_selector.substring(index+1);

    parent.on[event_type].add((event) {
      var found = false;
      parent.queryAll(selector).forEach((el) {
        if (el == event.target) found = true;
      });
      if (!found) return;

      print(event.target.parent.id);
      callback(event);

      event.preventDefault();
    });
  }

  // noSuchMethod(name, args) {
  //   print("[noSuchMethod] $name");
  // }
}
