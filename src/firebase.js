import firebase from "firebase";
const config = {
    apiKey: "AIzaSyCydrKyPRytu6ghKxRx91T8OMXY7RasQpE",
    authDomain: "moodsound-cd326.firebaseapp.com",
    databaseURL: "https://moodsound-cd326.firebaseio.com",
    projectId: "moodsound-cd326",
    storageBucket: "moodsound-cd326.appspot.com",
    messagingSenderId: "194683059175"
};
firebase.initializeApp(config);
const db = firebase.firestore();
const settings = {timestampsInSnapshots: true};
db.settings(settings);

export {db}
export default firebase;