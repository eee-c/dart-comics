#library('Collection class to describe my comic book collection');

#import('https://raw.github.com/eee-c/hipster-mvc/master/HipsterCollection.dart');

#import('Models.ComicBook.dart');

class Comics extends HipsterCollection {
  get url() => '/comics';
  modelMaker(_) => new ComicBook();
}
