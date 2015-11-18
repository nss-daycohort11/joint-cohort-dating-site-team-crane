define(function(require) {
  var $ = require('jquery');
  var loadProfile = require("loadProfile");




  return {
    goTo: function(location) {
      if (location === "profile") {
        loadProfile();
        $("#profile-page").show();
        $("#loginPage").hide();
        $("#matches").hide();
        $("#swipe-view-page").hide();
      } else if (location === "discover") {
        // console.log("discover");
        $("#profile-page").hide();
        $("#loginPage").hide();
        $("#matches").hide();
        $("#swipe-view-page").show();
      } else if (location === "matches") {
        $("#matches").show();
        $("#profile-page").hide();
        $("#loginPage").hide();
        $("#swipe-view-page").hide();
        // console.log("matches");
      } else if (location === "login") {
        $("#profile-page").hide();
        $("#loginPage").show();
        $("#swipe-view-page").hide();
        $("#wrapper").toggleClass("toggled");
        $("#menu-toggle").toggleClass("toggled");
        $("#menu-toggle").toggleClass("menu-toggle");
        // console.log("login");
      }
    }
  };
});
