import firebase from "firebase/app"
import "firebase/firestore"

var firebaseConfig = {
    apiKey: "AIzaSyAem78wpKypUtm8-Iz9ROJO20mcRT8ikd8",
    authDomain: "website-comments-81d32.firebaseapp.com",
    databaseURL: "https://website-comments-81d32.firebaseio.com",
    projectId: "website-comments-81d32",
    storageBucket: "website-comments-81d32.appspot.com",
    messagingSenderId: "1014043996780",
    appId: "1:1014043996780:web:0541940ba05f46075cde49"
}

firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore()

export default firebase