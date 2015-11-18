define(function(require) {
  var q = require("q");
  var firebase = require("firebase");
  var allUserData = require("allUserData");
  var getUserMatches = require("getUserMatches");
  var _ = require("lodash");
  var $ = require("jquery");

  var deferred = q.defer();
  var allUsers;
  var thisUserMatches;


  allUserData()
  .then(function (data) {
    // console.log("All user data: ", data);
    allUsers = data;

    getUserMatches()
    .then(function (data) {
      // console.log("ThisUser Matches: ", data);
      thisUserMatches = data;
    }).done(function () {
        // loop through allUsers obj, checking if thisUser.matches has a matching ID.
        // create matchesArray
        var matchesArray = [];
        for (var userId in allUsers) {
          _.findKey( thisUserMatches, function (value) {
              if (userId === value)
                { 
                  // console.log(value);
                  matchesArray.push(allUsers[userId]); 
                }
          });
        }
        //console.log("MATCHES ARRAY:", matchesArray);
        
        require(['hbs!../templates/matches'], function (matchesTemplate) {
          $('#matches').append(matchesTemplate({matches: matchesArray}));
        });

    });

  })
  .done(function () {


  });
});




