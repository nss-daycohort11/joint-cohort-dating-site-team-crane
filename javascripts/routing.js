define(function(require) {
  var $ = require('jquery');
  var loadProfile = require("loadProfile");
  



  return {
    goTo: function(location) {
      if (location === "profile") {
        loadProfile();
        $("#loginPage").hide();
        $("#profile").show();
      } else if (location === "discover") {
        console.log("discover");
      } else if (location === "matches") {
        $("#profile").hide();
        console.log("matches");
      }
    }
  }
});
