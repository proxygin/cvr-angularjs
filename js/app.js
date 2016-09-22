'use strict';
var app = angular.module('myApp', [])
app.controller('CvrController', function($scope, $http){
  $scope.$watch('search', function() {
    fetch();
  });

  $scope.search = "";

  function fetch(){
    $http.get("http://localhost:4567/api/v1/companies/" + $scope.search)
      .then(function(response){ $scope.details = response.data; });
  }

  $scope.update = function(company){
    $scope.search = company.name;
  };

  $scope.select = function(){
    this.setSelectionRange(0, this.value.length);
  };

  $scope.insert = function(company) {
    $http.post("http://localhost:4567/api/v1/companies",company).success(function(response){
      $scope.response = response.data;
    });
  };

  $scope.list = function() { 
    $http.get("http://localhost:4567/api/v1/companies")
      .then(function(response){ $scope.company_list = response.data; });
  };
});
<!-- vim: set shiftwidth=2 tabstop=2 expandtab: :indentSize=2:tabSize=2:noTabs=true:-->
