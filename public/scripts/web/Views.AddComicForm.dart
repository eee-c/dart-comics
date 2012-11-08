#library('Form view to add new comic book to my sweet collection.');

#import('dart:html');
#import('ModalDialog.dart');
#import('package:hipster_mvc/hipster_view.dart');

class AddComicForm extends HipsterView {
  AddComicForm({collection, model, el}):
    super(collection:collection, model:model, el:el);


  post_initialize() {
    el = new ModalDialog();
    _attachUiHandlers();
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

  void render() { el.innerHTML = template(); }

  void remove() { el.innerHTML = ''; }

  template() {
    return """
<div id="add-comic-form">
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
</div>
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
    catch (e) {
      print("[Views.AddComicForm] ${e.toString()}");
    }
  }
}
