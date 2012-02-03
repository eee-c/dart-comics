#library('Model class describing a comic book');

#import('HipsterModel.dart');

class ComicBook extends HipsterModel {
  ComicBook(attributes) : super(attributes);
  get urlRoot() { return "/comics"; }
}
