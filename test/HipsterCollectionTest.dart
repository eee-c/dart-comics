import 'package:unittest/unittest.dart';
import 'package:unittest/html_enhanced_config.dart';

import "../public/scripts/HipsterCollection.dart" ;
import "../public/scripts/HipsterModel.dart";
import "../public/scripts/HipsterSync.dart";


class TestHipsterCollection extends HipsterCollection {
  String get url => 'test.json';
}

class TestHipsterModel extends HipsterModel {
  TestHipsterModel() : super({});
}

main() {
  useHtmlEnhancedConfiguration();

  group('Collection attributes', () {
    test('HipsterCollection has multiple models', (){
      HipsterCollection it = new HipsterCollection();
      it.models = [{'id': 17}, {'id': 42}];

      Expect.equals(2, it.length);
    });
  });

  group('HipsterCollection lookup', () {
    var model1 = {'id': 17},
        model2 = {'id': 42};

    HipsterCollection it = new HipsterCollection();
    it.models = [model1, model2];

    test('works by ID', () {
      Expect.listEquals([17], it[17].values);
      Expect.listEquals(['id'], it[17].keys);
      Expect.equals(model1, it[17]);
    });

    test('is null when it does not hold ID', () {
      Expect.isNull(it[1]);
    });
  });

  group('HipsterCollection fetch()', () {
    test('HipsterCollection fetch() fails without a url', () {
      HipsterCollection it = new HipsterCollection();
      Expect.throws(() {it.fetch();});
    });
  });

  group('HipsterCollection fetch() callback', () {
    test('is invoked', () {
      HipsterSync.sync = expectAsync2((method, model) {
        var completer = new Completer();
        completer.complete([]);
        return completer.future;
      });

      HipsterCollection it = new TestHipsterCollection();
      it.fetch();
    });

    test('dispatches a load event', () {
      HipsterSync.sync = protectAsync2((method, model) {
        return new Future.immediate([]);
      });
      HipsterCollection it = new TestHipsterCollection();

      it.
        on.
        load.
        add(expectAsync1((event) {
          expect(event.collection, isNotNull);
        }));

      it.fetch();
    });
  });

  group('Events', () {
    test('HipsterCollection add dispatch add event', () {
      noOpSync(method, model, [options]) {}
      HipsterSync.sync = noOpSync;

      HipsterCollection it = new TestHipsterCollection();

      it.
        on.
        insert.
        add(expectAsync1((event) {
          expect(event.collection, isNotNull);
        }));

      it.add(new TestHipsterModel());
    });
  });
}
