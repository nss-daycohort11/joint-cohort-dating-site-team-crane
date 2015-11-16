define(function(require) {
  var q = require("q");
  var firebase = require("firebase");
  var allUserData = require("allUserData");
  var getUserMatches = require("getUserMatches");

  var uid;
  var deferred = q.defer();
  var allUsers;
  var thisUserMatches;

  // Make a call to FB to get user's ID.
  var ref = new Firebase("https://funwithfurries.firebaseio.com/");
  var authData = ref.getAuth();
  if (authData) {
    console.log("Authenticated user with uid:", authData.uid);
    uid = authData.uid;
    // Run ajax call to bring in user's matches
    // retrieveMatches();
  }

  allUserData()
  .then(function (data) {
    console.log("All user data: ", data);
    allUsers = data;

    getUserMatches()
    .then(function (data) {
      console.log("ThisUser Matches: ", data);
      thisUserMatches = data;
    })

  })
  .done(function () {
    // loop through allUsers obj, checking if thisUser.matches has a matching ID.

  })
});




