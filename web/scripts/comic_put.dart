import 'dart:html';
import 'package:json/json.dart' as JSON;

main() {
  var form_el = document.query('#new-comic-form');

  form_el.onSubmit.listen((event) {
    var form = event.target,
        title = form.query('input[name=title]'),
        author = form.query('input[name=author]'),
        format = form.queryAll('input[name=format]');

    event.preventDefault();

    print("title: ${title.value}");
    print("author: ${author.value}");
    print(format);

    var data = {'title':title.value, 'author':author.value}
      , json = JSON.stringify(data);

    print(json);

    var req = new HttpRequest();
    req.open('post', '/comics');
    req.setRequestHeader('Content-type', 'application/json');
    req.send(json);
    print(req.responseText);
  });
}
