// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyCeHC4AHrQhQSGQt7qUivgxlUOhaXY9Muc',
    authDomain: 'fb-bdreact1-a3503.firebaseapp.com',
    projectId: 'fb-bdreact1-a3503',
    storageBucket: "fb-bdreact1-a3503.appspot.com",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export default app;
