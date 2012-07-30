

var tuple1 = new Tuple;

tuple1.set('0', 2)
          ('b', 4)
          ('c', 6)
;

tuple1.add('d', 2)
          ('e', 4)
          ('f', 6)
;

var tuple2 = new Tuple;

tuple2.set('g', 2);


tuple1.tie(tuple2);
tuple1.remove('b');

console.log(tuple1.get(0));