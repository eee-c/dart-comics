#import('dart:io');
#import('dart:json');

main() {
  HttpServer app = new HttpServer();

  app.addRequestHandler(
    (req) {
      if (req.method != 'GET') return false;

      String path = publicPath(req.path);
      if (path == null) return false;

      req.session().data = {'path': path};
      return true;
    },
    (req, res) {
      var file = new File(req.session().data['path']);
      var stream = file.openInputStream();
      stream.pipe(res.outputStream);
    }
  );

  app.addRequestHandler(
    (req) => req.method == 'GET' && req.path == '/json',
    (req, res) {
      var data = {
        'title': 'Watchmen',
        'author': 'Alan Moore'
      };

      res.contentLength = JSON.stringify(data).length;
      res.headers.contentType = 'application/json';
      res.outputStream.writeString(JSON.stringify(data));
      res.outputStream.close();
    }
  );


  app.listen('127.0.0.1', 8000);
}

String publicPath(String path) {
  if (pathExists("public$path")) return "public$path";
  if (pathExists("public$path/index.html")) return "public$path/index.html";
}

boolean pathExists(String path) => new File(path).existsSync();
