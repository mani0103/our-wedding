import firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyBNfImkaNQWveOoM6C2jd0wKxumNP22qzk",
  authDomain: "silvi-and-attila.firebaseapp.com",
  databaseURL: "https://silvi-and-attila.firebaseio.com",
  storageBucket: "silvi-and-attila.appspot.com",
  messagingSenderId: "359969086277"
};
var fire = firebase.initializeApp(config);
export default fire;