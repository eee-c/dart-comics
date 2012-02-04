#library('Simple view to toggle new comic form view');

#import('dart:html');

#import('Views.AddComicForm.dart');

class AddComic {
  var get el;
  var get collection;

  var form_view;

  AddComic([el]) {
    this.el = document.query(el);

    _attachUiHandlers();
  }

  _attachUiHandlers() {
    el.on.click.add(_toggle_form);
  }

  _toggle_form(event) {
    if (form_view == null) {
      form_view = new AddComicForm();
      form_view.render();
    }
    else {
      form_view.remove();
      form_view = null;
    }
  }
}
