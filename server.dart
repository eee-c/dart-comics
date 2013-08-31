import 'dart:io';
import 'package:json/json.dart';

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

  static index(req, res) {
    res.headers.contentType = 'application/json';
    res.outputStream.writeString(JSON.stringify(db.values));
    res.outputStream.close();
  }

  static post(req, res) {
    var input = new StringInputStream(req.inputStream);
    var post_data = '';

    input.onLine = () {
      var line = input.readLine();
      post_data = post_data.concat(line);
    };

    input.onClosed = () {
      var graphic_novel = JSON.parse(post_data);
      graphic_novel['id'] = uuid.v1();

      db[graphic_novel['id']] = graphic_novel;

      res.statusCode = 201;
      res.headers.contentType = 'application/json';

      res.outputStream.writeString(JSON.stringify(graphic_novel));
      res.outputStream.close();
    };
  }

  static delete(req, res) {
    var r = new RegExp(r"^/comics/([-\w\d]+)");
    var id = r.firstMatch(req.path)[1];

    db.remove(id);

    res.outputStream.writeString('{}');
    res.outputStream.close();
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
    if (pathExists("app/web$path")) return "app/web$path";
    if (pathExists("app/web$path/index.html")) return "app/web$path/index.html";
  }

  static bool pathExists(String path) => new File(path).existsSync();
}
