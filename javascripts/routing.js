define(function(require) {
  var $ = require('jquery');

  return {
    goTo: function(location) {
      if (location === "profile") {
        console.log("profile");
      } else if (location === "discover") {
        console.log("discover");
      } else if (location === "matches") {
        console.log("matches");
      }
    }
  }
});
