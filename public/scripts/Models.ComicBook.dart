library models_comic_book;

import 'HipsterModel.dart';

class ComicBook extends HipsterModel {
  ComicBook(attributes) : super(attributes);
  get urlRoot { return "/comics"; }
}
