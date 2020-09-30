import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
        apiKey: "AIzaSyCmy58iUi7c-8helLRJ3EIuJioSeR2v0as",
        authDomain: "think-piece-tut.firebaseapp.com",
        databaseURL: "https://think-piece-tut.firebaseio.com",
        projectId: "think-piece-tut",
        storageBucket: "think-piece-tut.appspot.com",
        messagingSenderId: "1018311417617",
        appId: "1:1018311417617:web:6e5a50c03918048a73b6b0",
        measurementId: "G-VKC95CTGLY"
    }

    firebase.initializeApp(firebaseConfig)

    export const firestore = firebase.firestore()

    // likely deprecated/fixed issue – breaks app when used
    // const settings = { timestampInSnapshots: true }
    // firestore.settings(settings)

    window.firebase = firebase

    export default firebase