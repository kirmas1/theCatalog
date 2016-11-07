var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");

var contactList = [
  {
    _id:'0',
    name:'Nevo',
    email:'nevo@nevo.com',
    number:'12345'
  },
  {
    _id:'1',
    name:'Sagi',
    email:'sagi@kirma.com',
    number:'1234533'
  }
];



$scope.contactlist = contactList;

var refresh = function() {
  // $http.get('/contactlist').success(function(response) {
  //   console.log("I got the data I requested");
  //   $scope.contactlist = response;
  //   $scope.contact = "";
  // });

};

//refresh();

$scope.addContact = function() {
  console.log($scope.contact);
  // $http.post('/contactlist', $scope.contact).success(function(response) {
  //   console.log(response);
  //   refresh();
  // });
  contactList.push($scope.contact);
  //refresh();

};

$scope.remove = function(id) {
  console.log(id);
  $http.delete('/contactlist/' + id).success(function(response) {
    refresh();
  });
};

$scope.edit = function(id) {
  console.log(id);
  // $http.get('/contactlist/' + id).success(function(response) {
  //   $scope.contact = response;
  // });
  $scope.contact = contactList[id];
};  

$scope.update = function() {
  console.log($scope.contact._id);
  // $http.put('/contactlist/' + $scope.contact._id, $scope.contact).success(function(response) {
  //   refresh();
  // })
  id=$scope.contact._id;
  contactList[id]=$scope.contact;
};

$scope.deselect = function() {
  $scope.contact = "";
}

}]);﻿