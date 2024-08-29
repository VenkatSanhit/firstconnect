import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCyVmjtAeY92Es0_17PGUc_kU_823vy8ws",
  authDomain: "firstconnect-ccb0b.firebaseapp.com",
  databaseURL: "https://firstconnect-ccb0b-default-rtdb.firebaseio.com",
  projectId: "firstconnect-ccb0b",
  storageBucket: "firstconnect-ccb0b.appspot.com",
  messagingSenderId: "827266575549",
  appId: "1:827266575549:web:4b680c363794f5f35d5bd4",
  measurementId: "G-6TN0QWCPX4",
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

export default database;
