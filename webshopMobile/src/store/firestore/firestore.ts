// Import the functions you need from the SDKs you need
import {Item} from '@types';
import {initializeApp} from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
} from 'firebase/firesore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDzOY9uIil_YfUHjke5KPi8egmlkz0LgyU',
  authDomain: 'webshop-bc340.firebaseapp.com',
  projectId: 'webshop-bc340',
  storageBucket: 'webshop-bc340.appspot.com',
  messagingSenderId: '968729572979',
  appId: '1:968729572979:web:027e31af2fed49851a1c06',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {
  db,
  app,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  getFirestore,
};

const doc = (db: any, collection: string, id: string) => {
  return db.collection(collection).doc(id);
};

export async function addItem(data: Item) {
  try {
    const docRef = await addDoc(collection(db, 'items'), {...data});
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

export async function getItems() {
  try {
    const querySnapshot = await getDocs(collection(db, 'items'));
    return querySnapshot.docs.map(doc => doc.data());
  } catch (e) {
    console.error('Error getting documents: ', e);
  }
}

export async function updateItem(data: Item) {
  try {
    const docRef = doc(db, 'items', data.id);
    await updateDoc(docRef, {...data});
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error writing document: ', e);
  }
}

export async function deleteItem(data: Item) {
  try {
    const docRef = doc(db, 'items', data.id);
    await deleteDoc(docRef);
    console.log('Document deleted with ID: ', docRef.id);
  } catch (e) {
    console.error('Error deleting document: ', e);
  }
}
