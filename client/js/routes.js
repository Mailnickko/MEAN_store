myApp.config(function($routeProvider){
	$routeProvider
	.when('/', {
		controller: 'CustomerController',
		controllerAs: 'CustomerCtrl',
		templateUrl: '/partials/customer.partial.html'
	})
	.when('/orders', {
		controller: 'OrderController',
		controllerAs: 'OrderCtrl',
		templateUrl: '/partials/order.partial.html'
	})
	.otherwise({
		redirectTo: '/'
	})
})