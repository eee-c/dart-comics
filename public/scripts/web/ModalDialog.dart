#library("Modal Dialog");
#import("dart:html");
class ModalDialog implements Element {
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

  Node remove() => hide();

  Node hide() {
    _removeHandlers();
    bg.remove();
    return el.remove();
  }

  void show() {
    _attachHanders();
    _drawBackground();
    _drawElement();
  }

  get on => el.on;
  get parent => el.parent;
  ElementList queryAll(String selectors) => el.queryAll(selectors);
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

  _drawBackground([_]) {
    print('_drawBackground');
    if (bg != null) return;

    bg = new Element.tag('div');
    document.body.nodes.add(bg);

    window.document.documentElement.rect.then((document) {
      bg.style.position = 'absolute';
      bg.style.top = '0px';
      bg.style.left = '0px';

      bg.style.width = "${document.offset.width}px";
      bg.style.height = "${document.client.height}px";

      bg.style.backgroundColor = 'black';
      bg.style.opacity = '0.8';
      bg.style.zIndex = '1000';
    });
  }

  _drawElement([_]) {
    document.body.nodes.add(el);

    window.document.documentElement.rect.then((document) {
      el.style.opacity = '0';

      el.style.position = 'absolute';
      el.style.top = '0px';
      el.style.left = '0px';

      el.style.backgroundColor = 'white';
      el.style.padding = '20px';
      el.style.borderRadius = '10px';

      el.style.zIndex = '1001';

      el.rect.then((dialog) {
        el.style.top = '80px';
        int offset_left = (document.offset.width/2 - dialog.offset.width/2).toInt();
        el.style.left = "${offset_left}px";

        el.style.transition = 'opacity 1s ease-in-out';
        el.style.opacity = '1';
      });
    });
  }
}
