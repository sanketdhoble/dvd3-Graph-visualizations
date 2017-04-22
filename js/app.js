
var testApp = angular.module('testApp', ['ngRoute','nvd3']);


	// configure our routes
	testApp.config(function($routeProvider) {
		$routeProvider

			
			.when('/', {
				templateUrl : 'pages/main_page.html',
				controller  : 'mainpageCtrl'
				
			})

			.when('/ques2', {
				templateUrl : 'pages/ques2.html',
				controller  : 'ques2Ctrl'
			})

			


		
	});

