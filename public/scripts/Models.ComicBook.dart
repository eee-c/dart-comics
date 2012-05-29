#library('Model class describing a comic book');

#import('package:hipster-mvc/HipsterModel.dart');

class ComicBook extends HipsterModel {
  ComicBook(): super();
  ComicBook.byNeilGaiman(): super({author: 'Neil Gaiman'});
}
