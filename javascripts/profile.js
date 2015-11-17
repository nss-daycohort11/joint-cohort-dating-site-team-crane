define(function(require) {
  // define dependents for requireJS
  var $ = require("jquery");
  var getUserId = require("getUserId");

// get current authenticated Firebase user
  var userID = getUserId();
  var userDataURL = "https://funwithfurries.firebaseio.com/" + userID;
  var userDataRef = new Firebase(userDataURL);
  userDataRef.once('value', function (dataSnapshot) {
        // code to handle new value and load profile HTML elements
        var profileData = dataSnapshot.val();

      }, function (err) {
        // code to handle read error
        console.log("Unable to read data at \""+userDataURL);
      });

  $(".save-profile").click(function(event) {
    var profileData = {
      "picture": $("[name=img-url]").val(),
      "name": $("[name=name]").val(),
      "furryName": $("[name=furry-name]").val(),
      "age": $("[name=age]").val(),
      "gender": $("[name=gender]").val(),
      "species": $("[name=species]").val(),
      "bio": $("[name=bio]").val(),
      "matches": [],
      "likedBy": []
    }

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
  });

  return {
    loadProfile: function() {
      console.log("loadProfile called.");
        var userID = getUserId();
        var userDataURL = "https://funwithfurries.firebaseio.com/" + userID;
        var userDataRef = new Firebase(userDataURL);
        userDataRef.once('value', function (dataSnapshot) {
        // code to handle new value and load profile HTML elements
        var profileData = dataSnapshot.val();
        $(".profile-pic").attr("src",profileData.picture);
        $("[name=img-url]").val(profileData.picture);
        $("[name=name]").val(profileData.name);
        $("[name=furry-name]").val(profileData.furryName);
        $("[name=age]").val(profileData.age);
        $("[name=gender]").val(profileData.gender);
        $("[name=species]").val(profileData.species);
        $("[name=bio]").val(profileData.bio);
    });
  }
};

});