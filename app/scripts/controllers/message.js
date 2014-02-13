'use strict';

angular.module('chattyApp')
  .controller('MessageCtrl', function ($scope, $http) {
  	$http.get("http://localhost:12200/").success(function(messages){
  	    $scope.messages = messages;
  	});
  	$scope.addMessage = function(){
	    var myNewMessage = {message: $scope.newMessageText};
	    $http.post("http://localhost:12200", myNewMessage).success(function(){
	    	$scope.messages.push(myNewMessage);
	    });
	};
  });
