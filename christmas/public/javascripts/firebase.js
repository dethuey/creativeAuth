//import firebase from 'firebase';
var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");

var config = {
    apiKey: "AIzaSyASMf2fh7-TZsf6KPEBrQEtwrqtWWxwVhw",
    authDomain: "creativelist-4c9c0.firebaseapp.com",
    databaseURL: "https://creativelist-4c9c0.firebaseio.com",
    projectId: "creativelist-4c9c0",
    storageBucket: "",
    messagingSenderId: "186847075742"
};
var app = firebase.initializeApp(config);

module.exports.app = app; //.database(); //this doesnt have to be database only
