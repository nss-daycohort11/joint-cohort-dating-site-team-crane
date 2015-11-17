define(function(require) {
  var $ = require('jquery');
  var profile = require("profile");
  



  return {
    goTo: function(location) {
      if (location === "profile") {
        console.log("profile");
        profile.loadProfile();
        $("#profile-page").show();
        $("#loginPage").hide();
        $("#swipe-view-page").hide();
      } else if (location === "discover") {
        console.log("discover");
        $("#profile-page").hide();
        $("#loginPage").hide();
        $("#swipe-view-page").show();
      } else if (location === "matches") {
        console.log("matches");
      }
    }
  };
});
