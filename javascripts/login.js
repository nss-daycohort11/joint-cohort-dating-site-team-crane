define(function(require) {
  var f = require("firebase");
  var $ = require("jquery");
  var routing = require("routing");

  var ref = new Firebase("https://funwithfurries.firebaseio.com");

  $("#newUser").click(function() {
    ref.authWithOAuthPopup("facebook", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
        ref.child(authData.uid).once('value', function(snapshot) {
          if (snapshot.val() !== null) {
            $("#userExists").show();
          } else {
            ref.child(authData.uid).set({
              name: authData.facebook.displayName,
              picture: authData.facebook.profileImageURL,
            });
            routing.goTo("profile");
          }
        });
      }
    });
  });

  $("#login").click(function() {
    ref.authWithOAuthPopup("facebook", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        ref.child(authData.uid).once('value', function(snapshot) {
          if (snapshot.val() === null) {
            $("#userDoesntExist").show();
          } else {
            routing.goTo("discover");
          }
        });
      }
    });
  });
});
