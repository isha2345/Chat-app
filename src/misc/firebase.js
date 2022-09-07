import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// eslint-disable-next-line import/newline-after-import
import 'firebase/compat/database';
const config={
    apiKey: "AIzaSyD7Aw9oEnh_153Bcox170fFDjLWvUJ1Qyk",
    authDomain: "chat-web-app-765ef.firebaseapp.com",
    databaseURL: "https://chat-web-app-765ef-default-rtdb.firebaseio.com",
    projectId: "chat-web-app-765ef",
    storageBucket: "chat-web-app-765ef.appspot.com",
    messagingSenderId: "997696899996",
    appId: "1:997696899996:web:790ac3dd50fba4e0bed659"
};
const app = firebase.initializeApp(config);  
export const auth = app.auth();
export const database = app.database();
