library hipster_sync;

import 'dart:html';
import 'dart:json';

class HipsterSync {
  // private class variable to hold an application injected sync behavior
  static var _injected_sync;

  // setter for the injected sync behavior
  static set sync(fn) {
    _injected_sync = fn;
  }

  // delete the injected sync behavior
  static useDefaultSync() {
    _injected_sync = null;
  }

  // static method for HipsterModel and HipsterCollection to invoke -- will
  // forward the call to the appropriate behavior (injected or default)
  static Future<dynamic> call(method, model) {
    if (_injected_sync == null) {
      return _defaultSync(method, model);
    }
    else {
      return _injected_sync(method, model);
    }
  }

  // default sync behavior
  static Future<dynamic> _defaultSync(method, model) {
    var request = new HttpRequest(),
        completer = new Completer();

    request.
      on.
      load.
      add((event) {
        var req = event.target,
            json = JSON.parse(req.responseText);
        completer.complete(json);
      });

    request.open(method, model.url, true);

    // POST and PUT HTTP request bodies if necessary
    if (method == 'post' || method == 'put') {
      request.setRequestHeader('Content-type', 'application/json');
      request.send(JSON.stringify(model.attributes));
    }
    else {
      request.send();
    }

    return completer.future;
  }
}
