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

//Tentative d'authentification (ne fonctionne pas en raison d'un Firebase undefined)
/*var ref = new Firebase("https://project-file-share-1.firebaseapp.com/");
ref.auth("AUTH_TOKEN", function(error, result) {
	if(error) {
		console.log("login failed !", error);
	}
	else {
		console.log("Successfully logged in !", result.auth);
		console.log("Auth expires at:", new Date(result.expires * 1000));
	}
});*/

const postKey = firebase.database().ref().child('posts').push().key;
firebase.database().ref().update({
  [`/posts/${postKey}`]: {
    body: 'hello world'
  }
}).then(res => console.log('post created', res), err => console.error('could not create post', err));

//Création des données
//if(! firebase.database().ref().child('messageForPeople').exists()) {
	console.info("Messages for peoble do not seem to exist in the database. Let's create some !");

	const messages = firebase.database().ref().child('messageForPeople').push().key;
	firebase.database().ref().update({
	  [`/helloworld/${messages}`]: {
	  	messages: {
	  		birth 		: "Hello world ! Welcome to life !",
	    	childhood 	: "OK congratulations ! Now let's assume your are grown up. What do you want to do now ?",
	    	study		: "Congratulations ! You have just graduated ! What now ?",
	    	phd			: "WOW ! Such knowledge ! Much respect !",
	    	career		: "OK good luck in life now !",
	    	pension		: "You have worked hard enough now. You can have a rest now...",
	    	death		: "Rest in peace..."
	  	},
	  	other	: "Ok some useless data here..." 
	  }
	}).then(res => console.log('messages created !', res), err => console.error('could not create messages...', err));	
//}

const restangular = require('restangular');
console.log('Hello world');


