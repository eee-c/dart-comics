import 'Collections.Comics.dart' as Collections;
import 'Views.Comics.dart' as Views;
import 'Views.AddComic.dart' as Views;

main() {
  var my_comics_collection = new Collections.Comics()
    , comics_view = new Views.Comics(
        el:'#comics-list',
        collection: my_comics_collection
      );

  my_comics_collection.fetch();

  new Views.AddComic(
    el:'#add-comic',
    collection: my_comics_collection
  );
}
