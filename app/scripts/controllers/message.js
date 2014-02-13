'use strict';

angular.module('chattyApp')
  .controller('MessageCtrl', function ($scope, $http) {
  	$http.get("http://localhost:12200/").success(function(messages){
  	    $scope.messages = messages;
  	});
  });
