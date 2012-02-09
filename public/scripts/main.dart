#import('Collections.Comics.dart', prefix: 'Collections');
#import('Views.Comics.dart', prefix: 'ViewsFIXME01');
#import('Views.AddComic.dart', prefix: 'ViewsFIXME02');

main() {

  var my_comics_collection = new Collections.Comics()
    , comics_view = new ViewsFIXME01.Comics(
        el:'#comics-list',
        collection: my_comics_collection
      );

  my_comics_collection.fetch();

  new ViewsFIXME02.AddComic(
    el:'#add-comic',
    collection: my_comics_collection
  );
}
