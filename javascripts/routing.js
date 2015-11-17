define(function(require) {
  var $ = require('jquery');
  var profile = require("profile");
  



  return {
    goTo: function(location) {
      if (location === "profile") {
        console.log("in profil, calling loadProfile");
        profile.loadProfile();
        $("#loginPage").hide();
        $("#profile").show();
      } else if (location === "discover") {
        console.log("discover");
      } else if (location === "matches") {
        console.log("matches");
      }
    }
  }
});
