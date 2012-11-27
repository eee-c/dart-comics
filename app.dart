import 'dart:io';
import 'dart:json';

import 'package:dirty/dirty.dart';

main() {
  HttpServer app = new HttpServer();

  app.addRequestHandler(Public.matcher, Public.handler);

  app.addRequestHandler(
    (req) => req.method == 'GET' && req.path == '/comics',
    Comics.index
  );

  app.addRequestHandler(
    (req) => req.method == 'POST' && req.path == '/comics',
    Comics.post
  );

  app.addRequestHandler(
    (req) => req.method == 'DELETE' &&
             new RegExp(r"^/comics/\d").hasMatch(req.path),
    Comics.delete
  );

  app.listen('127.0.0.1', 8000);
}

class Comics {
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
      graphic_novel['id'] = db.length + 1;

      db[graphic_novel['id']] = graphic_novel;

      res.statusCode = 201;
      res.headers.contentType = 'application/json';

      res.outputStream.writeString(JSON.stringify(graphic_novel));
      res.outputStream.close();
    };
  }

  static delete(req, res) {
    var r = new RegExp(r"^/comics/(\d+)");
    var id = r.firstMatch(req.path)[1];

    db.remove(int.parse(id));

    res.outputStream.writeString('{}');
    res.outputStream.close();
  }
}

class Public {
  static matcher(req) {
    if (req.method != 'GET') return false;

    String path = publicPath(req.path);
    if (path == null) return false;

    req.session().data = {'path': path};
    return true;
  }

  static handler(req, res) {
    var file = new File(req.session().data['path']);
    var stream = file.openInputStream();
    stream.pipe(res.outputStream);
  }

  static String publicPath(String path) {
    if (pathExists("public$path")) return "public$path";
    if (pathExists("public$path/index.html")) return "public$path/index.html";
  }

  static boolean pathExists(String path) => new File(path).existsSync();
}
