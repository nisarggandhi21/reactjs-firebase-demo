import { useState } from "react";
// Firebase
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

// UPDATE YOUR FIREBASE CONFIG HERE
const firebaseConfig = {};

if (!firebase.apps[0]) {
	firebase.initializeApp(firebaseConfig);
}

// Variables
var provider = new firebase.auth.GoogleAuthProvider();
var database = firebase.database();

// Authentication
export function signInWithGooglePopUp() {
	firebase
		.auth()
		.signInWithPopup(provider)
		.then((result) => {
			console.log("User has signed in.");
		})
		.catch((error) => {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			// The email of the user's account used.
			var email = error.email;
			// The firebase.auth.AuthCredential type that was used.
			var credential = error.credential;
			console.log(
				`Errors occurred during sign in: ${errorCode}, ${errorMessage}, ${email}, ${credential}`
			);
		});
}

// Realtime Database

export function useHitCounter() {
	const [value, setValue] = useState(null);
	console.log("Called useHitCounter hook");
	var hitCountRef = database.ref("hits");
	hitCountRef.on("value", (snapshot) => {
		const data = snapshot.val();
		if (data !== value) {
			setValue(data);
		}
	});

	return value;
}
