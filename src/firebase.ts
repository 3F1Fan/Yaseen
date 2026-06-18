import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Firebase web config. These values are not secret — they identify the
// project to Firebase and are meant to ship in client code. Data is
// protected by Firestore security rules, not by hiding this config.
const firebaseConfig = {
  apiKey: 'AIzaSyA4LxDnECsWSSzW5fCPnpKreHdR4cbHFoU',
  authDomain: 'yaseen-portal.firebaseapp.com',
  databaseURL:
    'https://yaseen-portal-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'yaseen-portal',
  storageBucket: 'yaseen-portal.firebasestorage.app',
  messagingSenderId: '186521573974',
  appId: '1:186521573974:web:f5485f63260f576be1f9f7',
}

const app = initializeApp(firebaseConfig)

// Cloud Firestore database handle, used throughout the app.
export const db = getFirestore(app)
