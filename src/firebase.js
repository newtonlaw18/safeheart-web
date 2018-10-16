import Firebase from 'firebase';
import 'firebase/database';

// Initialize Firebase
const firebaseApp = Firebase.initializeApp({
  	apiKey: "AIzaSyC6KMK8QLnrNsoGTmDCVbvWbKuek6HjBMo",
	authDomain: "safe-heart.firebaseapp.com",
	databaseURL: "https://safe-heart.firebaseio.com",
	projectId: "safe-heart",
	storageBucket: "safe-heart.appspot.com",
	messagingSenderId: "124265515460"
});

export const db = firebaseApp.database();