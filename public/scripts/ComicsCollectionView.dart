#library('Collection View for My Comic Book Collection');

#import('dart:html');
#import('dart:json');

class ComicsCollectionView {
  var get el;
  var get collection;

  ComicsCollectionView([el, collection]) {
    this.el = document.query(el);
    this.collection = collection;

    collection.on.load.add((event) {
      render();
    });

    collection.on.load.add((event) {
      print("This really did fire in response to a custom event");
    });


    _attachUiHandlers();
  }

  render() {
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
