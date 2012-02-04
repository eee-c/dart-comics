#import('Collection.Comics.dart');
#import('Views.ComicsCollection.dart');
#import('Views.AddComic.dart');

main() {
  var my_comics_collection = new Comics()
    , comics_view = new ComicsCollection(
        el:'#comics-list',
        collection: my_comics_collection
      );

  my_comics_collection.fetch();

  new AddComic(el:'#add-comic');
}
