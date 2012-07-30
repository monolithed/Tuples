# Tuple

Implementation of object Tuple

## Element access

* **Generic get ( [ String name ] );**<br />

```javascrip
tuple.get('key');
```

## Capacity

* **Number size ( );**<br />

```javascrip
tuple.size();
```

* **Boolean empty ( );**<br />

```javascrip
tuple.empty();
```

## Modifiers

* **Function set ( );**<br />

```javascript
var tuple = new Tuple;

tuple.set('a', 1)
         ('b', 2)
         ('c', 3)
;
```

* **Function add ( );**<br />

```javascript
tuple.add('d', 4)
         ('e', 5)
;
```

* **void tie ( );**<br />

```javascript
tuple.tie(tuple2);
```

* **&remove ( );**<br />

```javascript
tuple.remove('b');
```

* **void clear ( );**<br />

```javascript
tuple.clear();
```

## Examples

* 1.

```javascript
var tuple = new Tuple;

tuple.set('a', 1)
         ('b', 2)
         ('c', 3)
;

tuple.add('d', 4)
         ('e', 5)
         ('f', 6)
;

tuple.get();
// {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6}
```

* 2.

```javascript
var tuple1 = new Tuple;
var tuple2 = new Tuple;

tuple1.set('a', 1)
          ('b', 2)
          ('c', 3)
;

tuple2.set('d', 4)
          ('e', 5)
          ('f', 6)
;

tuple1.tie(tuple2);
// tuple1: {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6}
```

* 3.

```javascript
var tuple = new Tuple;

tuple.set('a', 1)
         ('b', 2)
         ('c', 3)
;

tuple.remove('a');
// tuple: {b: 2, c: 3}
```


* 4.

```javascript
var tuple = new Tuple;

tuple.set('a', 1)
         ('b', 2)
         ('c', 3)
;

tuple.size(); // 3
```


##_

* License
   This work is licensed under the MIT (MIT_LICENSE.txt) license

* Copyright (c) 2012 [Alexander Guinness] (https://github.com/monolithed)
