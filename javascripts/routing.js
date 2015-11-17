define(function(require) {
  var $ = require('jquery');

  return {
    goTo: function(location) {
      if (location === "profile") {
        console.log("profile");
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
