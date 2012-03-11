#library('Form view to add new comic book to my sweet collection.');

#import('dart:html');
#import('HipsterView.dart');

class AddComicForm extends HipsterView {
  AddComicForm([collection, model, el]):
    super(collection:collection, model:model, el:el);

  post_initialize() {
    _addToDom();
    _attachUiHandlers();
  }

  _addToDom() {
    this.el = new Element.html('<div id="add-comic-form"/>');
    this.el.style.opacity = "0";
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

  render() {
    this.el.innerHTML = template();

    el.style.transition = 'opacity 1s ease-in-out';
    el.style.opacity = "1";
  }

  remove() {
    this.el.remove();
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
    el.style.opacity = "0";

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
