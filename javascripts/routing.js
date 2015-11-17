define(function(require) {
  var $ = require('jquery');
  var loadProfile = require("loadProfile");
  



  return {
    goTo: function(location) {
      if (location === "profile") {
        loadProfile();
        $("#profile-page").show();
        $("#loginPage").hide();
        $("#swipe-view-page").hide();
        $("#menu-sidebar").removeClass("toggled");
      } else if (location === "discover") {
        console.log("discover");
        $("#profile-page").hide();
        $("#loginPage").hide();
        $("#swipe-view-page").show();
        $("#menu-sidebar").removeClass("toggled");
      } else if (location === "matches") {
        $("#profile").hide();
        $("#swipe-view-age").show();
        console.log("matches");
      }
    }
  };
});
