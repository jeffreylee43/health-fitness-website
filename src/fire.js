import firebase from 'firebase'
  var firebaseConfig = {
    apiKey: "AIzaSyCEId8SdCA9Ofg2og9j2iqjn_N66NBFio0",
    authDomain: "fitu-1a541.firebaseapp.com",
    projectId: "fitu-1a541",
    storageBucket: "fitu-1a541.appspot.com",
    messagingSenderId: "81967081382",
    appId: "1:81967081382:web:96f8750586eac1611d9167",
    measurementId: "G-SLXEN56W92"
  };
const fire = firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default fire;