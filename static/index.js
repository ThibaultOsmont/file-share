'use strict';

require('angular');

// Initialize Firebase
var config = {
	apiKey: "AIzaSyB_5ddDEb4EqftuMEOZ2owWVW2SYsPQMhE",
	authDomain: "project-file-share-1.firebaseapp.com",
	databaseURL: "https://project-file-share-1.firebaseio.com",
	storageBucket: "project-file-share-1.appspot.com",
};
firebase.initializeApp(config);

const restangular = require('restangular');
console.log('Hello world');