#library('Sync layer for HipsterMVC');

#import('dart:html');
#import('dart:json');

class HipsterSync {
  // private class variable to hold an application injected sync behavior
  static var _injected_sync;

  // setter for the injected sync behavior
  static set sync(fn) {
    _injected_sync = fn;
  }

  // static method for HipsterModel and HipsterCollection to invoke -- will
  // forward the call to the appropriate behavior (injected or default)
  static call(method, model, [options]) {
    if (_injected_sync == null) {
      return _default_sync(method, model, options:options);
    }
    else {
      return _injected_sync(method, model, options:options);
    }
  }

  // default sync behavior
  static _default_sync(method, model, [options]) {
    print("[_default_sync]");

    if (options == null) options = {};

    var req = new XMLHttpRequest();

    if (options.containsKey('onLoad')) {
      req.on.load.add((event) {
        var request = event.target
          , list = JSON.parse(request.responseText);

        options['onLoad'](list);
      });
    }
    req.open(method, model.url, true);
    req.send();
  }
}
