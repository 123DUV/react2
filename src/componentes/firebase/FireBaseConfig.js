import {initializeApp} from 'firebase/app';
import {getAuth,GithubAuthProvider} from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyC_vnxI1WpnFJ34rCeu9vxbx58ArGuUs4A",
    authDomain: "react-2-4e0ad.firebaseapp.com",
    projectId: "react-2-4e0ad",
    storageBucket: "react-2-4e0ad.appspot.com",
    messagingSenderId: "311894294337",
    appId: "1:311894294337:web:5b085bba09f4e4b5ac6bc0",
    measurementId: "G-P5GFDCTM1V"
  };

  const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GithubAuthProvider();

export {auth, provider}