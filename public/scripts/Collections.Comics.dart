#library('Collection class to describe my comic book collection');

#import('HipsterCollection.dart');
#import('Models.ComicBook.dart');

class Comics extends HipsterCollection {
  Comics() {
    url = '/comics';
    model = (attrs) => new ComicBook(attrs);

    on = new CollectionEvents();
    models = [];
  }
}
