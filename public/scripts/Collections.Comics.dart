#library('Collection class to describe my comic book collection');

#import('HipsterCollection.dart');
#import('Models.ComicBook.dart');

class Comics extends HipsterCollection {
  get url() => '/comics';
  modelMaker(attrs) => new ComicBook(attrs);
}
