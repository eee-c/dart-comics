import 'package:unittest/unittest.dart';
import 'package:unittest/html_enhanced_config.dart';

import 'package:scripts/main.dart' as App;

class TestModel {
  String get url => '/test';
}

main() {
  useHtmlEnhancedConfiguration();

  group('reading', () {
    test('empty when no data previously stored', (){
      var it = new TestModel();
      expect(
        App.localSync('read', it),
        completion(equals([]))
      );
    });
  });
}
