#library('Collection View for My Comic Book Collection');

#import('dart:html');
#import('dart:json');

class ComicsCollectionView {
  var get el;
  var get collection;

  ComicsCollectionView(target_el) {
    el = document.query(target_el);
    collection = [];

    _attachUiHandlers();
  }

  render() {
    // TODO move into a proper collection object
    _ensureCollectionLoaded();
    el.innerHTML = template(collection);
  }

  template(list) {
    // This is silly, but [].forEach is broke
    if (list.length == 0) return '';

    var html = '';
    list.forEach((comic) {
      html += _singleComicBookTemplate(comic);
    });
    return html;
  }

  // TODO eliminate in a proper collection object
  var _load_requested = false;

  _ensureCollectionLoaded() {
    // TODO this should go away in a proper collection that fires an onLoad
    // event
    if (_load_requested) return;
    _load_requested = true;

    var req = new XMLHttpRequest();

    req.on.load.add(_handleOnLoad);
    req.open('get', '/comics', true);
    req.send();
  }

  _handleOnLoad(event) {
    var request = event.target;

    // TODO trigger an event for which the view can listen and render
    collection = JSON.parse(request.responseText);

    render();
  }

  _singleComicBookTemplate(comic) {
    return """
      <li id="${comic['id']}">
        ${comic['title']}
        (${comic['author']})
        <a href="#" class="delete">[delete]</a>
      </li>
    """;
  }

  _attachUiHandlers() {
    attach_handler(el, 'click .delete', (event) {
      print("[delete] ${event.target.parent.id}");
      delete(event.target.parent.id, callback:() {
        event.target.parent.remove();
      });
    });
  }

  delete(id, [callback]) {
    var req = new XMLHttpRequest()
      , default_callback = (){};

    req.on.load.add((res) {
      (callback != null ? callback : default_callback)();
    });

    req.open('delete', '/comics/$id', true);
    req.send();
  }

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
