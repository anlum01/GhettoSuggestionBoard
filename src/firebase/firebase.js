import firebase from 'firebase/app';
import 'firebase/auth';
import dotenv from 'dotenv';
import path from 'path';

const res = dotenv.config();

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DB_URL,
  projectId: process.env.PROJ_ID,
  storageBucket: process.env.BUCKET,
  messagingSenderId: process.env.SENDER_ID
};

export const rrfConfig = {
  UserProfile: 'Users',
  enableLogging: false
};

firebase.initializeApp(config);

const auth = firebase.auth();

export {
  auth
};

export default firebase;
