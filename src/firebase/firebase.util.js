const { initializeApp } = require("firebase/app");
var firebase = require("firebase/app");
const { getAuth, onAuthStateChange } = ("firebase/auth");
const admin = require("firebase-admin");
const { applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const firebaseApp = initializeApp({
    apiKey: "AIzaSyC6Y2pKv2B6OpLeJZEB3EHzxPDBQcsy6o4",
    authDomain: "news-b8a71.firebaseapp.com",
    projectId: "news-b8a71",
    storageBucket: "news-b8a71.appspot.com",
    messagingSenderId: "293366423347",
    appId: "1:293366423347:web:8bcce449c26775301ba846"
});




firebase.initializeApp
const app = admin.initializeApp(firebaseApp);
console.log(app.name);
// const db = admin.firestore(app);
const db = getFirestore();



// const data = {
//     name: 'Los Angeles',
//     state: 'CA',
//     country: 'USA'
// };
// try {
//     const res =await db.collection('cities').doc('LA').set(data);

// } catch (err) {
//     next(err);
// }
// Add a new document in collection "cities" with ID 'LA'


// console.log(res);
// admin.initializeApp();


// admin.initializeApp();
// // const auth = getAuth(firebaseApp);
// const db = admin.firestore();
// const docRef = db.collection('users').doc('alovelace');
async function quickstartAddData(db) {
    // [START firestore_setup_dataset_pt1]
    const docRef = db.collection('users').doc('alovelace');

    await docRef.set({
        first: 'Ada',
        last: 'Lovelace',
        born: 1815
    });
    const aTuringRef = db.collection('users').doc('aturing');

    await aTuringRef.set({
        'first': 'Alan',
        'middle': 'Mathison',
        'last': 'Turing',
        'born': 1912
    });
}



async function quickstartListen(db) {
    // [START firestore_setup_dataset_read]
    const snapshot = await db.collection('users').get();
    snapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
    });
    // [END firestore_setup_dataset_read]
}

// getQuote().then(result => {
//     console.log(result.body);
//     const obj = JSON.parse(result.body);
//     const quoteData = {
//         quote: obj.quote,
//         author: obj.author
//     };
//     return db.collection('sampleData').doc('inpiration').set('quoteData').then(() => {
//         console.log('ew quote written in Database');
//     })
// });



// docRef.set({
//     first: 'Ada',
//     last: 'Lovelace',
//     born: 1815
// });
// const aTuringRef = db.collection('users').doc('aturing');

// await aTuringRef.set({
//     'first': 'Alan',
//     'middle': 'Mathison',
//     'last': 'Turing',
//     'born': 1912
// });
// const snapshot =  db.collection('users').get();
// snapshot.forEach((doc) => {
//     console.log(doc.id, '=>', doc.data());
// });

// initializeApp(firebaseConfig); // Initialize Firebase

// Get the current user
function getCurrentUser() {
    return firebase.auth().currentUser;
}

// login with email and password
function logIn(email, password) {
    try {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
        console.log(error);
    }
}

function registerUser(email, password) {
    try {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
        console.log(error);
    }
}

function logOut() {
    return firebase.auth().signOut();
}

module.exports = {
    logIn,
    registerUser,
    logOut,
    getCurrentUser
};







