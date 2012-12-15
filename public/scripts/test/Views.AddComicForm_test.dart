import 'package:unittest/unittest.dart';
import 'package:unittest/html_enhanced_config.dart';

import '../web/Views.AddComicForm.dart';

main() {
  useHtmlEnhancedConfiguration();

  group('simple group', () {
    test('sanity check', (){
      Expect.equals(1+1, 2);
    });
  });
}
