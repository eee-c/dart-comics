#library('Form view to add new comic book to my sweet collection.');

#import('dart:html');

class AddComicForm {
  var get el;

  AddComicForm() {
    this.el = new Element.html('<div id="add-comic-form"/>');
    this.el.style.opacity = "0";

    document.body.nodes.add(this.el);

    _attachUiHandlers();
  }

  _attachUiHandlers() {
    attach_handler(el, 'submit form', (event) {
      event.preventDefault();
      _submit_create_form(event.target);
    });

    attach_handler(el, 'click a', (event) {
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

  attach_handler(parent, event_selector, callback) {
    var index = event_selector.indexOf(' ')
      , event_type = event_selector.substring(0,index)
      , selector = event_selector.substring(index+1);

    parent.on[event_type].add((event) {
      var found = false;
      parent.queryAll(selector).forEach((el) {
        if (el == event.target) found = true;
      });
      if (!found) return;

      print(event.target.parent.id);
      callback(event);

      event.preventDefault();
    });
  }

  // Thar be model code here...
  _submit_create_form(event) {
    var title = el.query('input[name=title]')
      , author = el.query('input[name=author]')
      , format = el.queryAll('input[name=format]');

    print("title: ${title.value}");
    print("author: ${author.value}");
    print(format);

    var data = {'title':title.value, 'author':author.value}
    , json = JSON.stringify(data);

    print(json);

    var req = new XMLHttpRequest();
    req.open('post', '/comics', false);
    req.setRequestHeader('Content-type', 'application/json');
    req.send(json);
    print(req.responseText);
  }
}
