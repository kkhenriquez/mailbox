var app = angular.module("MailboxApp", ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/mailbox', {
			controller: 'HomeController',
			templateUrl: 'views/home.html'
		})
		.when('/mailbox/:id', {
			controller: 'EmailController',
			templateUrl: 'views/email.html'
		})
		.otherwise({
			redirectTo: '/mailbox'
		});
});