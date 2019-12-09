const config = require("../../private/firebase");
const firebase = require("firebase");

firebase.initializeApp(config.firebaseKey);

setInterval(() => {
  console.log("remove");
  firebase
    .database()
    .ref("comment")
    .set("");
}, 10000);
