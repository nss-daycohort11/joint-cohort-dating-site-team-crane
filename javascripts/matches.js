define(function(require) {
  var q = require("q");
  var firebase = require("firebase");
  var allUserData = require("allUserData");
  var getUserMatches = require("getUserMatches");

  var deferred = q.defer();
  var allUsers;
  var thisUserMatches;


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

    // create matchesArray
    // for (var userId in allUsers) {
      //if (userId is in thisUserMatches--LoDash--) 
      // {matchesArray.push(allUsers[userId])}}


    require(['hbs!../templates/matches'], function (matchesTemplate) {
      $('#matches').append(matchesTemplate());
    });

  })

});




