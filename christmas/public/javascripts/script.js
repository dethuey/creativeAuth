//import app from '/modules/firebase.js'
var app = require("../../modules/firebase.js");
var firebase = app.ref();

var myApp = angular.module("myApp",["firebase"]);
myApp.controller("listController", ["$scope", "$firebaseArray",
 function($scope, $firebaseArray) {
   //var ref = firebase.database().ref().child("users"); //creates a new collection inside the database called "messages"
   if (firebase.auth().currentUser === null) {
       console.log("No current user");
   }
   else {
       var userID = firebase.auth().currentUser.uid;
   }
   console.log("ID = ", userID);
   var usersref = firebase.database().ref('/users' + userID);
   $scope.list = $firebaseArray(usersref);
   $scope.update = function(list) {
       var newitem = {from:list.item || "anonymous",body:list.link};
       console.log(newitem);
       $scope.list.$add(newitem);
       list.item = "";
       list.link = "";
   }
 }
]);

function mysignout() {
    console.log("clicked sign out!");
    firebase.auth().signOut();
    window.location = 'auth.html';
}
window.onload = function() {
    document.getElementById('sign-out').addEventListener('click', mysignout, false);
};
//document.getElementById('sign-out').addEventListener('click', mysignout, false);