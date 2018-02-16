const config = {
    apiKey: "AIzaSyDXKNHY0c-_GpMEfI3PBXbziKNtLTi7AXU",
    authDomain: "mercadodev-1ae9d.firebaseapp.com",
    databaseURL: "https://mercadodev-1ae9d.firebaseio.com",
    projectId: "mercadodev-1ae9d",
    storageBucket: "",
    messagingSenderId: "299549074254"
};

const Rebase = require('re-base');
const firebase = require('firebase/app');
require('firebase/database');

const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());

export default base;
