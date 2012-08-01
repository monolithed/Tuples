/**
 * Object Tuple
 * Licensed under the MIT
 * @depends: Object.keys, Function.prototype.bind, Function.prototype.apply
 * @author: Alexander Guinness
 * @version: 1.0
 * @date: Thu Aug 02 03:00:00 2012
 **/

var Tuple = (function(__object__)
{
	var __init__ = function() { },

	__private__ = {
		/*
		- void data ( [ object Arguments ] );
		*/
		data: function(param) {
			this.data[param[0]] = param[1];
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
		- * get ( [ String | Number name ] );
		*/
		get: function(name) {
			return typeof name === 'string' || typeof name === 'number' ? this.data[name + ''] : this.data;
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
			return this.add.apply(this, arguments);
		},

		/*
		- Function add ( );
		*/
		add: function() {
			__private__.data.call(this, arguments);

			var push = function() {
				__private__.data.call(this, arguments);

				return push;

			}.bind(this);

			return push;
		},

		/*
		- void tie ( );
		*/
		tie: function(object) {
			var __own__ = __object__.hasOwnProperty;

			if (__object__.toString.call(object) !== '[object Object]' && !__own__.call(object, 'data'))
				throw new TypeError(object + ' : is not object');

			var data = object.data;

			for (var i in data) {
				if (__own__.call(data, i))
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
