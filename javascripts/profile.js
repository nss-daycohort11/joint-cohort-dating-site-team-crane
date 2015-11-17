define(function(require) {
  // define dependents for requireJS
  var $ = require("jquery");
  var getUserId = require("getUserId");

// get current authenticated Firebase user
  var userID = getUserId();
  var userDataRef = "https://funwithfurries.firebaseio.com/" + userID;
  console.log("userDataRef",userDataRef);
  var userData = new Firebase(userDataRef);
  console.log("userData", userData.child("picture"));

  $(".save-profile").click(function(event) {
    profileData = {
      "picture": $("[name=img-url]").val(),
      "name": $("[name=name]").val(),
      "furryName": $("[name=furry-name]").val(),
      "age": $("[name=age]").val(),
      "gender": $("[name=gender]").val(),
      "species": $("[name=species]").val(),
      "bio": $("[name=bio]").val()
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
      userData.update(profileData, onComplete);
  });

  return {
    loadProfile: function() {
      console.log("loadProfile called.");
      console.log(userData);
      // $(".profile-pic").attr("src",userData.key().picture);
      // $("[name=name]").val(userData.key().name);
      // $("[name=furry-name]").val(userData.key().furryName);
      // $("[name=age]").val(userData.key().age);
      // $("[name=gender]").val(userData.key().gender);
      // $("[name=species]").val(userData.key().species);
      // $("[name=bio]").val(userData.key().bio);
    }
  }

});