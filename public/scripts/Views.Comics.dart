#library('Collection View for My Comic Book Collection');

#import('dart:html');
#import('HipsterView.dart');

class Comics extends HipsterView {
  Comics([el, collection]) {
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
      collection[event.target.parent.id].delete(callback:(_) {
        event.target.parent.remove();
      });
    });
  }

}
