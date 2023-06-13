
import firebase from 'firebase/app';
import 'firebase/database'
const firebaseConfig = {
    apiKey: "AIzaSyBGY0cFtWfJ4Nwz67dp3b2LvEeu36Q9G7I",
    authDomain: "reactjst3h2212.firebaseapp.com",
    databaseURL: "https://reactjst3h2212-default-rtdb.firebaseio.com",
    projectId: "reactjst3h2212",
    storageBucket: "reactjst3h2212.appspot.com",
    messagingSenderId: "544697003129",
    appId: "1:544697003129:web:46b282f5eb6a59fa5c78a8",
    measurementId: "G-TZ52V34PC3"
  };
  if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);


}
// const analytics = getAnalytics(app);
        const databaseRef =    firebase.database().ref();
        export const noteref = databaseRef.child('reactjst3h2212')
        export default firebase