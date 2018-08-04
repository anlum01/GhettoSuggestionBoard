import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDEvmze0TnUUZRWwvrbz9dt2aUGsIAjeu4",
  authDomain: "suggestionsboard-2d9ab.firebaseapp.com",
  databaseURL: "https://suggestionsboard-2d9ab.firebaseio.com",
  projectId: "suggestionsboard-2d9ab",
  storageBucket: "suggestionsboard-2d9ab.appspot.com",
  messagingSenderId: "812077124491"
};

firebase.initializeApp(config);

const auth = firebase.auth();

export {
  auth
};

export default firebase;
