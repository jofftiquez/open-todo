import firebase from 'firebase';
import store from '../vuex';

const firebaseApp = firebase.initializeApp(store.getters['config/firebaseConfig']);

export const db = firebaseApp.database();
export const ref = db.ref();
export const auth = firebaseApp.auth();
export const storage = firebaseApp.storage();