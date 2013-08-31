library modal_dialog;

import "dart:html";

class ModalDialog {
  Element el, bg;
  var resizeHandler;

  ModalDialog(): this.tag('div');

  ModalDialog.tag(String tag) {
    el = new Element.tag(tag);
    resizeHandler = _drawBackground;
  }

  ModalDialog.html(String html) {
    el = new Element.tag('div');
    el.innerHtml = html;
  }

  void set innerHtml(String html) {
    el.innerHtml = html;

    if (html == null || html == '')
      remove();
    else
      show();
  }

  void remove() => hide();

  void hide() {
    bg.remove();
    el.remove();
  }

  void show() {
    _attachHanders();
    _drawBackground();
    _drawElement();
  }

  get on => el.on;
  get parent => el.parent;
  List<Element> queryAll(String selectors) => el.queryAll(selectors);
  Element query(String selectors) => el.query(selectors);

  _attachHanders() {
    window
      ..onKeyDown.
          listen((event) {
            if (event.keyCode == 27) remove();
          })
      ..onResize.
          listen(resizeHandler);
  }

  _drawBackground([event]) {
    if (bg != null) return;

    bg = new DivElement();
    document.body.nodes.add(bg);

    var doc = window.document.documentElement;

    bg.style
      ..position = 'absolute'
      ..top = '0px'
      ..left = '0px'

      ..width = "${doc.offsetWidth}px"
      ..height = "${doc.clientHeight}px"

      ..backgroundColor = 'black'
      ..opacity = '0.8'
      ..zIndex = '1000';
  }

  _drawElement([event]) {
    document.body.nodes.add(el);

    var doc = window.document.documentElement;

    el.style
      ..opacity = '0'

      ..position = 'absolute'
      ..top = '0px'
      ..left = '0px'

      ..backgroundColor = 'white'
      ..padding = '20px'
      ..borderRadius = '10px'

      ..zIndex = '1001'

      ..top = '80px'

      ..transition = 'opacity 1s ease-in-out'
      ..opacity = '1';

    int offset_left = (doc.offsetWidth/2 - el.offsetWidth/2).toInt();
    el.style.left = "${offset_left}px";
  }
}
