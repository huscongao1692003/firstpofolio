import firebase from 'firebase/compat/app';
import "firebase/compat/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: 'my-web-90c5c.appspot.com',
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDERID,
    appId: process.env.REACT_APP_FIREBASE_APPID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
})
export default app
export const auth = app.auth();
export const storage = getStorage();
export const db = getFirestore(app);
