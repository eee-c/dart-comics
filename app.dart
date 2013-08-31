import 'dart:io';
import 'package:json/json.dart' as JSON;

import 'package:dirty/dirty.dart';
import 'package:uuid/uuid.dart';

main() {
  var port = Platform.environment['PORT'] == null ?
    8000 : int.parse(Platform.environment['PORT']);

  HttpServer.bind('127.0.0.1', port).then((app) {

    //app.listen(Public.matcher, Public.handler);
    app.listen((req) {
      if (req.method == 'GET' && req.uri.path == '/comics') {
        return Comics.index(req);
      }

      if (req.method == 'POST' && req.uri.path == '/comics') {
        return Comics.post(req);
      }

      if (req.method == 'DELETE' &&
          new RegExp(r"^/comics/[-\w\d]+$").hasMatch(req.uri.path)) {
        return Comics.delete(req);
      }

      if (Public.matcher(req)) {
        return Public.handler(req);
      }

    });

    print('Server started on port: ${port}');
  });
}

class Comics {
  static Uuid uuid = new Uuid();
  static Dirty db = new Dirty('dart_comics.db');

  static index(HttpRequest req) {
    print(db.values.toList());
    HttpResponse res = req.response;
    res.headers.contentType
      = new ContentType("application", "json", charset: "utf-8");

    res.write(JSON.stringify(db.values.toList()));
    res.close();
  }

  static post(HttpRequest req) {
    HttpResponse res = req.response;
    req.toList().then((list) {
      var post_data = new String.fromCharCodes(list[0]);
      print(post_data);
      var graphic_novel = JSON.parse(post_data);
      graphic_novel['id'] = uuid.v1();

      db[graphic_novel['id']] = graphic_novel;

      res.statusCode = 201;
      res.headers.contentType
        = new ContentType("application", "json", charset: "utf-8");

      res.write(JSON.stringify(graphic_novel));
      res.close();
    });
  }

  static delete(HttpRequest req) {
    HttpResponse res = req.response;
    var r = new RegExp(r"^/comics/([-\w\d]+)");
    var id = r.firstMatch(req.uri.path)[1];

    db.remove(id);

    res.write('{}');
    res.close();
  }
}

class Public {
  static matcher(HttpRequest req) {
    if (req.method != 'GET') return false;

    String path = publicPath(req.uri.path);
    if (path == null) return false;

    req.session['path'] = path;
    return true;
  }

  static handler(req) {
    var file = new File(req.session['path']);
    var stream = file.openRead();
      stream.pipe(req.response);
  }

  static String publicPath(String path) {
    if (pathExists("web$path")) return "web$path";
    if (pathExists("web$path/index.html")) return "web$path/index.html";
  }

  static bool pathExists(String path) => new File(path).existsSync();
}
