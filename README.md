# Tuple

Implementation of object Tuple

## Element access

* ** get ( [ String name ] );**<br />

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

* 1. Get and set fields

```javascript
var tuple = new Tuple;

tuple.set('a', 0)(1, 2)('function', function(param) {
	alert(param);
});

tuple.get('a');           // 0
tuple.get('function')(1); // 1
tuple.get(1);             // 2
tuple.get();              // {a: 1, 'function': [ object Function ], 1: 2}
```


* 2. Add or modify fields

```javascript
var tuple = new Tuple;

tuple.set('a', 1)
         ('b', 2)
;

tuple.add('c', 3)
         ('d', 4)
;

tuple.add(1, 5);

tuple.get(); // {a: 1, b: 2, c: 3, d: 4, 1: 5}
```

* 2. // Tie fields

```javascript
var tuple1 = new Tuple;
var tuple2 = new Tuple;

tuple1.set('a', 1);
tuple2.set('b', 2)

tuple1.tie(tuple2);
// tuple1: {a: 1, b: 2}
```

* 3. Remove fields

```javascript
var tuple = new Tuple;

tuple.set('a', 1)
         ('b', 2)
         ('c', 3)
;

tuple.remove('a');
// tuple: {b: 2, c: 3}
```


* 4. Get size of fields

```javascript
var tuple = new Tuple;

tuple.set('a', 1)
         ('b', 2)
         ('c', 3)
;

tuple.size(); // 3
```

* 5. Clear the fields

```javascript
var tuple = new Tuple;

tuple.set('a', 1)
         ('b', 2)
         ('c', 3)
;

tuple.clear(); // true
tuple.size();  // 0
```


##_

* License
   This work is licensed under the MIT (MIT_LICENSE.txt) license

* Copyright (c) 2012 [Alexander Guinness] (https://github.com/monolithed)
