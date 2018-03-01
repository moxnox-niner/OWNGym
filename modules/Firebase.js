import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyAmAQgaaYfEMAJaHRi2i4dZbnklEEfzDbI",
  authDomain: "gymfitnesspro-b18e7.firebaseapp.com",
  databaseURL: "https://gymfitnesspro-b18e7.firebaseio.com",
  projectId: "gymfitnesspro-b18e7",
  storageBucket: "gymfitnesspro-b18e7.appspot.com",
  messagingSenderId: "1045445790865"
};
firebase.initializeApp(config);

export const firebaseDatabase = firebase.database();
