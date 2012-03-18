#library('Simple view to toggle new comic form view');

#import('https://raw.github.com/eee-c/hipster-mvc/master/HipsterView.dart');

#import('Views.AddComicForm.dart');

class AddComic extends HipsterView {
  var form_view;

  AddComic([collection, model, el]):
    super(collection:collection, model:model, el:el) {
    this.el.style.borderRadius = '5px';
    this.el.style.borderWidth = '3px';
    this.el.style.borderColor = '#999';
    this.el.style.borderStyle = 'solid';
    this.el.style.cursor = 'pointer';
    this.el.style.display = 'inline';
    this.el.style.padding = '3px';
  }

  void post_initialize() {
    print("sub initialize");
    el.on.click.add(_toggle_form);
  }

  _toggle_form(event) {
    if (form_view == null) {
      form_view = new AddComicForm(collection: collection);
      form_view.render();
    }
    else {
      form_view.remove();
      form_view = null;
    }
  }
}
