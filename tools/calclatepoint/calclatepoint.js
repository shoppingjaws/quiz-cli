const config = require("../../private/firebase");
const firebase = require("firebase");
firebase.initializeApp(config.firebaseKey);

var point = {};
firebase
  .database()
  .ref("vote/")
  .once("value", function(obj) {
    for (var i = 2; i < process.argv.length; i = i + 2) {
      console.log(process.argv[i]);
      var quiz = obj.val()[process.argv[i]];
      for (var key in quiz) {
        console.log(key, quiz[key]);
        if (point[key] === undefined) {
          point[key] = 0;
        }
        if (quiz[key].toString() === process.argv[i + 1]) {
          point[key] = 1 + point[key];
        }
      }
    }
  })
  .then(() => {
    console.log(point);
    firebase
      .database()
      .ref("vote/point")
      .set(point);
  })
  .then(() => {
    //process.exit(1);
  });
