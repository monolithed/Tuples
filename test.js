var tuple1 = new Tuple;

tuple1.set('a', 2)
          ('b', 4)
          ('c', 6)
;

var tuple2 = new Tuple;

tuple2.add('d', 2)
          ('e', 4)
          ('f', 6)
;

tuple.tie(tuple2);
tuple.remove('b');

console.log(tuple.get());