// Generated Dart class from HTML template.
// DO NOT EDIT.

String safeHTML(String html) {
  // TODO(terry): Escaping for XSS vulnerabilities TBD.
  return html;
}

class ComicBook {
  Map<String, Object> _scopes;
  Element _fragment;

  HipsterModel comic;

  ComicBook(this.comic) : _scopes = new Map<String, Object>() {
    // Insure stylesheet for template exist in the document.
    add_ComicBook_templatesStyles();

    _fragment = new DocumentFragment();
    var e0 = new Element.html('''<li id="${comic['id']}">
    ${inject_0()}
    (${inject_1()})
    </li>''');
    _fragment.elements.add(e0);
    var e1 = new Element.html('<a href="#" class="delete">[delete]</a>');
    e0.elements.add(e1);
  }

  Element get root() => _fragment;

  // Injection functions:
  String inject_0() {
    return safeHTML('${comic['title']}');
  }

  String inject_1() {
    return safeHTML('${comic['author']}');
  }

  // Each functions:

  // With functions:

  // CSS for this template.
  static final String stylesheet = "";
}


// Inject all templates stylesheet once into the head.
bool ComicBook_stylesheet_added = false;
void add_ComicBook_templatesStyles() {
  if (!ComicBook_stylesheet_added) {
    StringBuffer styles = new StringBuffer();

    // All templates stylesheet.
    styles.add(ComicBook.stylesheet);

    ComicBook_stylesheet_added = true;
    document.head.elements.add(new Element.html('<style>${styles.toString()}</style>'));
  }
}
