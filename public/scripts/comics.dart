#import('dart:html');
#import('dart:json');

main() {
  load_comics();
  attach_add_handler();
}

attach_add_handler() {
  document.
    query('#add-comic').
    on.
    click.
    add(enable_add_form);
}

enable_add_form(event) {
  final form_div = document.query('#add-comic-form');

  form_div.style.transition = 'opacity 1s ease-in-out';
  form_div.style.opacity = "1";

  form_div.queryAll('a').forEach((el) {
    el.on.click.add(disable_add_form);
    event.preventDefault();
  });
}

disable_add_form(event) {
  final form_div = document.query('#add-comic-form');

  form_div.style.opacity = "0";

  form_div.queryAll('a').forEach((el) {
    el.on.click.remove(disable_add_form);
    event.preventDefault();
  });
}


load_comics() {
  var list_el = document.query('#comics-list')
    , req = new XMLHttpRequest();

  attach_handler(list_el, 'click .delete', (event) {
    print("[delete] ${event.target.parent.id}");
    delete(event.target.parent.id, callback:() {
      event.target.parent.remove();
    });
  });

  req.open('get', '/comics', true);

  req.on.load.add((res) {
    var list = JSON.parse(req.responseText);
    list_el.innerHTML = graphic_novels_template(list);
  });

  req.send();
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

delete(id, [callback]) {
  var req = new XMLHttpRequest()
    , default_callback = (){};

  req.on.load.add((res) {
    (callback != null ? callback : default_callback)();
  });

  req.open('delete', '/comics/$id', true);
  req.send();
}

graphic_novels_template(list) {
  var html = '';
  list.forEach((graphic_novel) {
    html += graphic_novel_template(graphic_novel);
  });
  return html;
}

graphic_novel_template(graphic_novel) {
  return """
    <li id="${graphic_novel['id']}">
      ${graphic_novel['title']}
      <a href="#" class="delete">[delete]</a>
    </li>""";
}

form_template([graphic_novel]) {
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

</form>
""";
}
