const config = require("../../private/firebase");
const firebase = require("firebase");

firebase.initializeApp(config.firebaseKey);

console.log("now loading", process.argv[2]);

const file = require(process.argv[2]);
console.log(file);

