(function(){
  'use strict';

  angular.module('myApp', [])
    .controller('myController', MyController)
    .filter('fullName', FullNameFilterFactory);

  MyController.$inject = ['$scope', '$filter', 'fullNameFilter'];

  function MyController($scope, $filter, fullNameFilter){
      $scope.name="srini";

      $scope.upper = function(){
        var uCase = $filter('uppercase');
        $scope.name = uCase($scope.name);

      }

      $scope.fullName = function(){
        var fullname  =  fullNameFilter($scope.name);
        return fullname;
      }

    }

    function FullNameFilterFactory (){
      return function(input){
          input = input || "";
          input  = input.replace("SRINI", "srinivas");
          return input;
      }

    }
})();
