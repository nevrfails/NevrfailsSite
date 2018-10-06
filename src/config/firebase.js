import firebase from 'firebase/app';
import 'firebase/database';

const DB_CONFIG = {
  apiKey: "AIzaSyCiaf16_tDJWODfh7fLj_Qd4JEAuvowVrE",
  authDomain: "nevrfails.firebaseapp.com",
  databaseURL: "https://nevrfails.firebaseio.com",
  projectId: "nevrfails",
  storageBucket: "nevrfails.appspot.com",
  messagingSenderId: "785522535032"
};

const dbconnect = firebase.initializeApp(DB_CONFIG);

export const database = dbconnect.database().ref().child("project");
