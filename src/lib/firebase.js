import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyChM8377G0jg-FiowQ7uHzDhzvdBj4rfoA',
  authDomain: 'instagram-clone-fc2fd.firebaseapp.com',
  projectId: 'instagram-clone-fc2fd',
  storageBucket: 'instagram-clone-fc2fd.appspot.com',
  messagingSenderId: '553965420269',
  appId: '1:553965420269:web:f38ebe04dd860f95bc56e4',
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

//Only seed Firebase one time!
//seedDatabase(firebase);

export { firebase, FieldValue };
