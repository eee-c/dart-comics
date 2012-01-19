#import('dart:html');
#import('dart:json');

main() {
   var list_el = document.query('#comics-list')
    , req = new XMLHttpRequest();

  req.open('get', '/comics', true);

  req.on.load.add((res) {
    print(req.responseText);
    var list = JSON.parse(req.responseText);

    var html = '';
    list.forEach((graphic_novel) {
      html +=
        "<li id='${graphic_novel['id']}'>" +
        "${graphic_novel['title']}" +
        " " +
        "<a href='#'>[delete]</a>" +
        "</li>";
    });

    list_el.innerHTML = html;
  });

  req.send();
}
