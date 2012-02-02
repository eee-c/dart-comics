#import('ComicsCollection.dart');
#import('ComicsCollectionView.dart');
#import('AddComicView.dart');

main() {
  var my_comics_collection = new ComicsCollection()
    , comics_view = new ComicsCollectionView(
        el:'#comics-list',
        collection: my_comics_collection
      );

  my_comics_collection.fetch();

  new AddComicView(el:'#add-comic');
}
