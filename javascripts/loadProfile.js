 define(function(require) {
  // define dependents for requireJS
  var getUserId = require("getUserId");
  
  return function() {
      console.log("loadProfile called.");
        var userID = getUserId();
        var userDataURL = "https://funwithfurries.firebaseio.com/" + userID;
        var userDataRef = new Firebase(userDataURL);
        
        // get data snapshot from firebase to populate profilePage HTML
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
  };
});