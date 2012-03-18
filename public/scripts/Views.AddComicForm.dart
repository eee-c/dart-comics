#library('Form view to add new comic book to my sweet collection.');

#import('dart:html');

#import('https://raw.github.com/eee-c/hipster-mvc/master/HipsterView.dart');

class AddComicForm extends HipsterView {
  AddComicForm([collection, model, el]):
    super(collection:collection, model:model, el:el);

  post_initialize() {
    _addToDom();
    _attachUiHandlers();
  }

  _addToDom() {
    el = new Element.html('<div id="add-comic-form"/>');

    document.body.nodes.add(this.el);
  }

  _attachUiHandlers() {
    attachHandler(el, 'submit form', (event) {
      event.preventDefault();
      _submit_create_form(event.target);
    });

    attachHandler(el, 'click a', (event) {
      event.preventDefault();
      _disable_create_form(event);
    });
  }

  Element bg;
  render() {
    // Black background
    bg = new Element.tag('div');
    document.body.nodes.add(bg);

    window.document.rect.then((document) {
      // Place the background above the document
      bg.style.position = 'absolute';
      bg.style.top = '0px';
      bg.style.left = '0px';

      bg.style.width = "${document.offset.width}px";
      bg.style.height = "${document.client.height}px";

      bg.style.backgroundColor = 'black';
      bg.style.opacity = '0.8';
      bg.style.zIndex = '1000';

      // Place the modal dialog on top of the background
      el.style.opacity = '0';
      el.innerHTML = template();

      el.style.position = 'absolute';
      el.style.top = '0px';
      el.style.left = '0px';

      el.style.backgroundColor = 'white';
      el.style.padding = '20px';
      el.style.borderRadius = '10px';

      el.style.zIndex = '1001';

      el.rect.then((dialog) {
        el.style.top = '80px';
        int offset_left = document.offset.width/2 - dialog.offset.width/2;
        el.style.left = "${offset_left}px";

        el.style.transition = 'opacity 1s ease-in-out';
        el.style.opacity = '1';
      });
    });
  }

  remove() {
    this.el.remove();
    this.bg.remove();
  }

  template() {
    return """
<form action="comics" id="new-comic-form">
<p>
<label>Title<br/>
<input type="text" name="title" id="comic-title"/>
</label></p>

<p>
<label>Author<br/>
<input type="text" name="author" id="comic-author"/>
</label></p>

<p>Format
<p>
<label>
<input type="checkbox" name="format" value="tablet" id="comic-table"/>
Tablet</label></p>
<p>
<label>
<input type="checkbox" name="format" value="dead-tree" id="comic-dead-tree"/>
Dead Tree</label></p>
</p>

<p>
<input type="submit" value="Bazinga!"/></p>
<a href="#">Cancel</a>
</form>
""";
  }

  _disable_create_form(event) {
    remove();

    el.queryAll('a').forEach((a) {
      a.on.click.remove(_disable_create_form);
      event.preventDefault();
    });
  }

  _submit_create_form(event) {
    var title = el.query('input[name=title]')
      , author = el.query('input[name=author]')
      , format = el.queryAll('input[name=format]');

    try {
      collection.create({
        'title':title.value,
        'author':author.value
      });
    }
    catch (Exception e) {
      print("Exception handled: ${e.type}");
    }
  }
}
