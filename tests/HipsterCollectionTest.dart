#import('lib/unittest/unittest_dartest.dart');
#import('lib/dartest/dartest.dart');

#import("../public/scripts/HipsterCollection.dart");
#import("../public/scripts/HipsterModel.dart");
#import("../public/scripts/HipsterSync.dart");


class TestHipsterCollection extends HipsterCollection {
  String get url() => 'test.json';
}

class TestHipsterModel extends HipsterModel {
  TestHipsterModel() : super({});
}

main() {
  test('HipsterCollection has multiple models', (){
    HipsterCollection it = new HipsterCollection();
    it.models = [{'id': 17}, {'id': 42}];

    Expect.equals(2, it.length);
  });

  group('HipsterCollection lookup', () {
    var model1 = {'id': 17},
        model2 = {'id': 42};

    HipsterCollection it = new HipsterCollection();
    it.models = [model1, model2];

    test('works by ID', () {
      Expect.listEquals([17], it[17].getValues());
      Expect.listEquals(['id'], it[17].getKeys());
      Expect.equals(model1, it[17]);
    });

    test('is null when it does not hold ID', () {
      Expect.isNull(it[1]);
    });
  });

  test('HipsterCollection fetch() fails without a url', () {
    HipsterCollection it = new HipsterCollection();
    Expect.throws(() {it.fetch();});
  });

  group('HipsterCollection fetch() callback', () {
    callbackSync(method, model, [options]) {
      options['onLoad']([]);
      callbackDone();
    }

    asyncTest('is invoked', 1, () {
      HipsterSync.sync = callbackSync;
      HipsterCollection it = new TestHipsterCollection();
      it.fetch();
    });

    asyncTest('dispatches a load event', 2, () {
      HipsterCollection it = new TestHipsterCollection();

      it.
        on.
        load.
        add((event) {
          callbackDone();
        });

      it.fetch();
    });
  });

  asyncTest('HipsterCollection add dispatch add event', 1, () {
    noOpSync(method, model, [options]) {}
    HipsterSync.sync = noOpSync;

    HipsterCollection it = new TestHipsterCollection();

    it.
      on.
      add.
      add((event) {
        callbackDone();
      });

    it.add(new TestHipsterModel());
  });

  new DARTest().run();
}
