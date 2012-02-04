#import('Collections.Comics.dart');
#import('Views.Comics.dart');
#import('Views.AddComic.dart');

main() {
  var my_comics_collection = new Comics()
    , comics_view = new Comics(
        el:'#comics-list',
        collection: my_comics_collection
      );

  my_comics_collection.fetch();

  new AddComic(el:'#add-comic');
}
