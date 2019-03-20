import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDbKFcNySJeoziITSn7IhClXdXBsvjY4sY",
  authDomain: "shopping-cart-c87b1.firebaseapp.com",
  databaseURL: "https://shopping-cart-c87b1.firebaseio.com",
  projectId: "shopping-cart-c87b1",
  storageBucket: "shopping-cart-c87b1.appspot.com",
  messagingSenderId: "704661045433"
};
firebase.initializeApp(config);

export default firebase;
