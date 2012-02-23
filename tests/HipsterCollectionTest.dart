#import('lib/unittest/unittest_dartest.dart');
#import('lib/dartest/dartest.dart');

#import("../public/scripts/HipsterCollection.dart");

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

  new DARTest().run();
}
