#import('Collections.Comics.dart', prefix: 'Collections');
#import('Views.Comics.dart', prefix: 'Views');
#import('Views.AddComic.dart', prefix: 'Views');

main() {

  var my_comics_collection = new Collections.Comics()
    , comics_view = new Views.Comics(
        el:'#comics-list',
        collection: my_comics_collection
      );

  my_comics_collection.fetch();

  new Views.AddComic(el:'#add-comic');
}
