#import('dart:io');
#import('dart:json');

main() {
  HttpServer app = new HttpServer();

  app.addRequestHandler(
    (req) => req.method == 'GET' && req.path == '/',
    (req, res) {
      var file = new File('public/index.html');
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
