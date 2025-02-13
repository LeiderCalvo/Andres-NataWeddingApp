import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const app = initializeApp({
    apiKey: "AIzaSyBpr-uMczYQwDk-AIFQwSMYXyg2r4gvISY",
    authDomain: "wedding-8d2ca.firebaseapp.com",
    projectId: "wedding-8d2ca",
    storageBucket: "wedding-8d2ca.appspot.com",
    messagingSenderId: "1097959247733",
    appId: "1:1097959247733:web:919b87a9ce8f88abfbcd3c"
});

const db = getFirestore(app);

const writeData = async (data) => {
    const ref = collection(db, "guessAndres&Nata")
    return addDoc(ref, data);
}

export default { writeData }