import firebase from 'firebase';
var firebaseConfig = {
  apiKey: "AIzaSyD5sNkXaaFQwAqW7Nh6TaInPCAOaIYJl2Y",
  authDomain: "login-bf59f.firebaseapp.com",
  projectId: "login-bf59f",
  storageBucket: "login-bf59f.appspot.com",
  messagingSenderId: "7535776192",
  appId: "1:7535776192:web:4a5e7bd9503205cbfbb825",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
