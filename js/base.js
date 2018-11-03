import firebase from "firebase/app"
import "firebase/database"

//Create an account on Firebase, and use the credentials they give you in place of the following
var config = {
    apiKey: "AIzaSyCQRpQtXbKYoac8y6ssgPno11-jdR71WQY",
    authDomain: "special-disco.firebaseapp.com",
    databaseURL: "https://special-disco.firebaseio.com",
    projectId: "special-disco",
    storageBucket: "special-disco.appspot.com",
    messagingSenderId: "87258023656"
};
firebase.initializeApp(config);

const database = firebase.database().ref();
const servers = {'iceServers': [{'urls': 'turn:numb.viagenie.ca','credential': 'Zachary Skiles','username': 'skilesz@purdue.edu'}]};

export {
    databse,
    servers
}
