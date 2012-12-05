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
  static call(method, model, {options}) {
    if (_injected_sync == null) {
      return _defaultSync(method, model, options:options);
    }
    else {
      return _injected_sync(method, model, options:options);
    }
  }

  // default sync behavior
  static _defaultSync(method, model, {options}) {
    var req = new HttpRequest();

    _attachCallbacks(req, options);

    req.open(method, model.url, true);

    // POST and PUT HTTP request bodies if necessary
    if (method == 'post' || method == 'put') {
      req.setRequestHeader('Content-type', 'application/json');
      req.send(JSON.stringify(model.attributes));
    }
    else {
      req.send();
    }
  }

  static _attachCallbacks(request, options) {
    if (options == null) return;

    if (options.containsKey('onLoad')) {
      request.on.load.add((event) {
        var req = event.target,
            json = JSON.parse(req.responseText);

        options['onLoad'](json);
      });
    }
  }
}
