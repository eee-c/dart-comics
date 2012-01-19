#import('dart:html');
#import('dart:json');

main() {
  var form_el = document.query('#new-comic-form');

  form_el.on.submit.add((event) {
    var form = event.target
      , title = form.query('input[name=title]')
      , author = form.query('input[name=author]')
      , format = form.queryAll('input[name=format]');

    event.preventDefault();

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
  });
}
