import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


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
    export const auth = firebase.auth()

    export const provider = new firebase.auth.GoogleAuthProvider()
    export const signInWithGoogle = () => auth.signInWithPopup(provider)
    export const signOut = () => auth.signOut()

    // breaks when used – – – – –
    // const settings = { timestampInSnapshots: true }
    // firestore.settings(settings)

    window.firebase = firebase

    export const createUserProfileDocument = async (user, additionalData) => {
        if (!user) return

        // Get a reference in the database
        const userRef = firestore.doc(`users/${user.uid}`)

        // Fetch doc from that location
        const snapshot = await userRef.get()

        if (!snapshot.exists) {
            const { displayName, email, photoURL } = user
            // console.log('------->',{user})
            const createdAt = new Date()
            try {
                await userRef.set({
                    displayName,
                    email,
                    photoURL,
                    createdAt,
                    ...additionalData,
                })
            } catch (error) {
                console.error('Error creating user', error.message)
            }
        }

        return getUserDocument(user.uid)
    } 

    export const getUserDocument = async (uid) => {
        if (!uid) return null
        try {
            const userDocument = await firestore.collection('users').doc(uid).get()

            return { uid, ...userDocument.data()}
        } catch (error) {
            console.error('Error fetching user', error.message)
        }
    }

    export default firebase