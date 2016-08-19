'use strict';

angular.module('weatherBlock', []).component('weatherBlock', {

	templateUrl: 'js/weather-block/weather-block.template.html',
	controller: function weatherBlockController($scope, $http, $route) {

		var cityApiEndpoint = 'http://api.openweathermap.org/data/2.5/weather';

		$scope.Weather = null;
		$scope.cities = [];

		$scope.searchWeather = function(searchTerm) {

			if (searchTerm && searchTerm.length !== 0) {

				var request = cityApiEndpoint + '?q='+(searchTerm||'')+'&appid=56bb9a13aa9662d915ca5fe9db602cd4';

				return $http.get(request, { params:{'units': 'metric'} })
				.then(function(result) {
					if(result.data.cod == '404') {
						$scope.feedback = true; 
						$scope.feedback = result.data.message; 
					} else { 
						$scope.feedback = false; 
						$scope.cities.push(result.data);
						console.log($scope.cities);
					}
				});

			} else {
				console.log('no input data');
			}

		};


		$scope.itemsList = [];
		$scope.citySelected = function($item) {
			$('input.ui-select-search').val('');
			$scope.itemsList.push($item);
		};
		$scope.cityRemoved = function(city) {
			$scope.cityToRemove =  $scope.itemsList.indexOf(city);
			$scope.itemsList.splice($scope.cityToRemove, 1);
		};

		$scope.date = new Date();

	}//end of controller

});