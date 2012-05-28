#library('Model class describing a comic book');

#import('https://raw.github.com/eee-c/hipster-mvc/master/HipsterModel.dart');

class ComicBook extends HipsterModel {
  ComicBook(): super();
  ComicBook.byNeilGaiman(): super({author: 'Neil Gaiman'});
}
