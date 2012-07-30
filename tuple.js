/**
 * Object Tuple
 * Licensed under the MIT
 * @depends: Object.keys, Function.prototype.bind
 * @author: Alexander Guinness
 * @version: 1.0
 * @date: Thu Aug 02 03:00:00 2012
 **/

var Tuple = (function(prototype)
{
	var __init__ = function() { },

	__private__ = {
		/*
		- void data ( [ object Arguments ] );
		*/
		data: function(param) {
			this.data[param[0]] = param[1];
		},

		/*
		- Function pair ( [ object Arguments ] );
		*/
		pair: function() {
			__private__.data.call(this, arguments);

			var push = function() {
				__private__.data.call(this, arguments);

				return push;

			}.bind(this);

			return push;
		}
	};

	__init__.prototype = {
		constructor: Tuple,

		/*
		----------------------------------------------------------------------------------
		Element access
		----------------------------------------------------------------------------------
		*/

		/*
		- Generic get ( [ String name ] );
		*/
		get: function(name) {
			return typeof name === 'string' ? this.data[name] : this.data;
		},

		/*
		----------------------------------------------------------------------------------
		Capacity
		----------------------------------------------------------------------------------
		*/

		/*
		- Number size ( );
		*/
		size: function() {
			return Object.keys(this.data).length;
		},

		/*
		- Boolean empty ( );
		*/
		empty: function() {
			return !this.size() > 0;
		},

		/*
		----------------------------------------------------------------------------------
		Modifiers
		----------------------------------------------------------------------------------
		*/

		/*
		- Function set ( );
		*/
		set: function() {
			this.clear();
			return __private__.pair.apply(this, arguments);
		},

		/*
		- Function add ( );
		*/
		add: function() {
			return __private__.pair.apply(this, arguments);
		},

		/*
		- void tie ( );
		*/
		tie: function(object) {
			var own = prototype.hasOwnProperty;

			if (prototype.toString.call(object) !== '[object Object]' && !own.call(object, 'data'))
				throw new TypeError(object + ' : is not object');

			var data = object.data;

			for (var i in data) {
				if (own.call(data, i))
					this.data[i] = data[i];
			}
		},

		/*
		- &remove ( );
		*/
		remove: function(name) {
			if (typeof name == 'string')
				delete this.data[name];

			return this;
		},

		/*
		- void clear ( );
		*/
		clear: function() {
			this.data = {};
		}
	};

	return __init__;

}(Object.prototype));

var tuple = new Tuple;

tuple.set('a', 2)
         ('b', 4)
         ('c', 6)
;

tuple.add('d', 2)
         ('e', 4)
         ('f', 6)
;

var tuple2 = new Tuple;

tuple2.set('g', 2);

tuple.tie(tuple2);

tuple.remove('b');

console.log(tuple.get());

//console.log(tuple.data);


