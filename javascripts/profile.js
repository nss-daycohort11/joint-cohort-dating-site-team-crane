define(function(require) {
  // define dependents for requireJS
  var $ = require("jquery");
  var getUserId = require("getUserId");
  var routing = require("routing");


// get current authenticated Firebase user
  getUserId()
  .then(function(userData) {
    var userID = userData;
    console.log("userID",userID);
  var splitUserID = userID.split(":");
  var userDataURL = "https://funwithfurries.firebaseio.com/facebook%3A" + splitUserID[1];
  var userDataRef = new Firebase(userDataURL);
  })
  .done(function() {});

  // handler to save profile info to firebase and go to matches page
  $(".save-profile").click(function(event) {
    var profileData = {
      "picture": $("[name=img-url]").val(),
      "name": $("[name=name]").val(),
      "furryName": $("[name=furry-name]").val(),
      "age": $("[name=age]").val(),
      "gender": $("[name=gender]").val(),
      "species": $("[name=species]").val(),
      "bio": $("[name=bio]").val(),
      "likedby": [],
      "matches": []
    };

    // success / fail handler for updating firebase with user data
  var onComplete = function(error) {
      if (error) {
        console.log('Synchronization failed');
      } else {
        console.log("profileData",profileData);
        console.log('Synchronization succeeded');
      }
    };
    // update firebase with user input form data
    // callback onComplete handles success / fail
      userDataRef.update(profileData, onComplete);
      routing.goTo("discover");
  });
});