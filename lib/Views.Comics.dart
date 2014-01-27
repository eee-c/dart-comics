library comics_view;

import 'package:hipster_mvc/hipster_view.dart';

class Comics extends HipsterView {
  Comics({collection, el}):
    super(collection:collection, el:el);

  post_initialize() {
    _subscribeEvents();
    _attachUiHandlers();
  }

  _subscribeEvents() {
    if (collection == null) return;

    collection.onLoad.listen((event) { render(); });
    collection.onAdd.listen((event) { render(); });
  }

  render() {
    el.innerHtml = template(collection);
  }

  template(list) {
    // This is silly, but [].forEach is broke
    if (list.length == 0) return '';

    var html = '';
    list.forEach((comic) {
      html = html + _singleComicBookTemplate(comic);
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
    attachHandler(el, 'click .delete', (event) {
      print("[delete] ${event.target.parent.id}");
      collection[event.target.parent.id].
        delete().
        then((_) {
          event.target.parent.remove();
        });
    });
  }

}
