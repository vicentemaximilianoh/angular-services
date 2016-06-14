var app = angular.module('TestApp', []);


function MyService() {

	var _name;

	this.setName = function (name) {
		 _name = name;
	}
	this.getName = function () {
		 return _name;
	}
}

app.service('MyService', MyService);
app.factory('MyFactory', ['MyService', function (MyService) {

	var _name;

	var getName = function () {
		return _name;
	}

	var setName = function (name) {
		_name = name;
	}

	function MyFactoryFn(name) {
		this.setName = setName;
		this.getName = getName;
	};

	// return MyFactoryFn;
	return {
		getName: getName,
		setName: setName
	};
}]);

app.controller('TestController', ['MyService', 'MyFactory', function (MyService, MyFactory) {

	console.log('service', MyService);
	console.log('service set name', MyService.setName('pepe'));
	console.log('factory set name', MyFactory.setName('pepe'));
	
	console.log('factory create object 1', new MyFactory('pepe'));
	console.log('factory create object 2', new MyFactory('jose'));
}]);

app.controller('TestController2', ['MyService', 'MyFactory', function (MyService, MyFactory) {

	console.log('service get name', MyService.getName());
	console.log('factory get name', MyFactory.getName());
	
	console.log('factory create object 3', new MyFactory('pepe'));
	console.log('factory create object 4', new MyFactory('jose'));
}]);

// Angular services
/* 
 - new keyword used in background.
 - service work as a constructor
 */

// Angular factories
/* 
- just called (return what we return in our factory)
- use when we need to return a thing different than an object.
- could be useful to create instances of objects.
 */