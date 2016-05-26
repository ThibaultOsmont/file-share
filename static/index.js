'use strict';

require('angular');

// Initialize Firebase
var config = {
  // LA CONFIGURATION DE VOTRE PROJET ICI (apiKey, authDomain, databaseURL)
	apiKey: "AIzaSyB_5ddDEb4EqftuMEOZ2owWVW2SYsPQMhE",
	authDomain: "project-file-share-1.firebaseapp.com",
	databaseURL: "https://project-file-share-1.firebaseio.com",
	storageBucket: ""
};

firebase.initializeApp(config);

const postKey = firebase.database().ref().child('posts').push().key;
firebase.database().ref().update({
  [`/posts/${postKey}`]: {
    body: 'hello world'
  }
}).then(res => console.log('post created', res), err => console.error('could not create post', err));

const restangular = require('restangular');
console.log('Hello world');


