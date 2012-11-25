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
    el.innerHTML = html;
  }

  void set innerHTML(String html) {
    el.innerHTML = html;

    if (html == null || html == '')
      remove();
    else
      show();
  }

  void remove() => hide();

  void hide() {
    _removeHandlers();
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
    window.
      on.
      keyDown.
      add((event) {
        if (event.keyCode == 27) remove();
      });

    window.
      on.
      resize.
      add(resizeHandler);
  }

  _removeHandlers() {
    window.
      on.
      resize.
      remove(resizeHandler);
  }

  _drawBackground([event]) {
    print('_drawBackground');
    if (bg != null) return;

    bg = new Element.tag('div');
    document.body.nodes.add(bg);

    window.requestLayoutFrame(() {
      var doc = window.document.documentElement;

      bg.style.position = 'absolute';
      bg.style.top = '0px';
      bg.style.left = '0px';

      bg.style.width = "${doc.offsetWidth}px";
      bg.style.height = "${doc.clientHeight}px";

      bg.style.backgroundColor = 'black';
      bg.style.opacity = '0.8';
      bg.style.zIndex = '1000';
    });
  }

  _drawElement([event]) {
    document.body.nodes.add(el);

    window.requestLayoutFrame(() {
      var doc = window.document.documentElement;

      el.style.opacity = '0';

      el.style.position = 'absolute';
      el.style.top = '0px';
      el.style.left = '0px';

      el.style.backgroundColor = 'white';
      el.style.padding = '20px';
      el.style.borderRadius = '10px';

      el.style.zIndex = '1001';

      el.style.top = '80px';
      int offset_left = (doc.offsetWidth/2 - el.offsetWidth/2).toInt();
      el.style.left = "${offset_left}px";

      el.style.transition = 'opacity 1s ease-in-out';
      el.style.opacity = '1';
    });
  }
}
