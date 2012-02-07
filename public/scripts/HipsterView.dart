#library('Base class for Views');

#import('dart:html');
#import('dart:htmlimpl');
#import('dart:json');

class HipsterView {
  var get model;
  var get el;
  var get collection;

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
}
