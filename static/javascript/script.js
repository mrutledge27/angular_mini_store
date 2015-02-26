
// Inject the ngRoute into the module
var angApp = angular.module('angApp', ['ngRoute']);

angApp.config(function ($routeProvider) {
	$routeProvider.when('/customers', {templateUrl: 'partials/customers.html'})
	.when('/orders', {templateUrl: 'partials/orders.html'})
	.when('/', {templateUrl: 'partials/customers.html'})
	.otherwise({redirectTo: '/'});
})

// FACTORIES
// CUSTOMER FACTORY
angApp.factory('customerFactory', function(){
	var customers = [
		{ name: 'Tiger Woods', createdAt: "April 3rd 2014" },
		{ name: 'Bob Barker', createdAt: "April 3rd 2014" },
		{ name: 'Bill Simmons', createdAt: "April 3rd 2014" }
	];

	var factory = {};

	factory.getCustomers = function (callback){
		console.log('inside factory');
		callback(customers);
	}

	return factory;
})
// ORDER FACTORY
angApp.factory('orderFactory', function(){
	var products = [
		{name: 'Nike Shoes'},
		{name: 'Black Belts'},
		{name: 'Ice Cream'},
		{name: 'Candy'}
	];

	var orders = [
		{ customerName: 'Tiger Woods', product: 'Nike Shoes', quantity: 2, createdAt: "April 3rd 2014" },
		{ customerName: 'Bob Barker', product: 'Ice Cream', quantity: 3, createdAt: "April 3rd 2014" },
		{ customerName: 'Bob Barker', product: 'Candy', quantity: 5, createdAt: "April 3rd 2014" }
	];

	var factory = {};

	var quantity = [];

	for (i=1;i<100;i++) {
		quantity.push(i);
	}

	var data = [
		{products: products},
		{orders: orders},
		{quantity: quantity}
	];

	factory.getOrders = function (callback){
		console.log('inside factory');
		callback(data);
	}

	return factory;
})

// CONTROLLERS
// CUSTOMER CONTROLLER
angApp.controller('customersController', function($scope, customerFactory) {
	$scope.customers = [];

	customerFactory.getCustomers(function (data){
		$scope.customers = data;
		console.log($scope.customers);
	})

	$scope.addCustomer = function(){
		var error = 0;
		for (customer in $scope.customers) {
			if ($scope.customers[customer].name == $scope.newCustomer.name)
			{
				error++;
			}
		}
		if (error == 0)
		{
			$scope.newCustomer.createdAt = new Date();
			$scope.customers.push($scope.newCustomer);
		}
		else
		{
			alert('Customer Name already exists!');
		}
		$scope.newCustomer = {};
	}

	$scope.removeCustomer = function(customer){
		$scope.customers.splice($scope.customers.indexOf(customer), 1);
		// console.log(customer);
	}
})
// ORDERS CONTROLLER
angApp.controller('ordersController', function($scope, orderFactory){
	$scope.data = [];

	orderFactory.getOrders(function (data){
		$scope.data = data;
		console.log($scope.data);
	})

	$scope.addOrder = function(){
		console.log($scope.newOrder);
		// $scope.newOrder.createdAt = new Date();
		// $scope.customers.push($scope.newCustomer);
		// $scope.newCustomer = {};
	}



})