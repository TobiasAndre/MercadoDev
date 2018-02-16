const config = {
    apiKey: "AIzaSyDXKNHY0c-_GpMEfI3PBXbziKNtLTi7AXU",
    authDomain: "mercadodev-1ae9d.firebaseapp.com",
    databaseURL: "https://mercadodev-1ae9d.firebaseio.com",
    projectId: "mercadodev-1ae9d",
    storageBucket: "gs://mercadodev-1ae9d.appspot.com",
    messagingSenderId: "299549074254"
};

const Rebase = require('re-base');
const firebase = require('firebase/app');
require('firebase/database');
require('firebase/storage');

const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());

export const storage = app.storage();

export default base;
