library comics_collection;

import 'package:hipster_mvc/hipster_collection.dart' ;

import 'Models.ComicBook.dart' ;

class Comics extends HipsterCollection {
  Type modelClass = ComicBook;
  String url = '/comics';
}
